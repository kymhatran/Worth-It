require 'rest-client'
require 'json'

def api_call(url, api_key)
  data = RestClient.get "https://api.up.com.au/api/v1/#{url}",
            {:Authorization => "Bearer #{api_key}"}
  JSON.parse(data, :symbolize_names => true)
rescue RestClient::ExceptionWithResponse => e
  e.response
end

def parse_datetime(datetime)
  temp = DateTime.parse(datetime)
  temp.strftime("%d/%m/%y %H:%M %A")
end

class UpApi

  def self.transactions(api_key)
    transactions = {}
    response = api_call('transactions', api_key)
    response[:data].each do |transaction|
      tag = transaction[:relationships][:tags][:data]
      # parsed = DateTime.parse(transaction[:attributes][:createdAt])
      # time = Time.parse(parsed + 36000).strftime("%d/%m/%y %H:%M")
      transactions[transaction[:id]] = {
        description: transaction[:attributes][:description],
        value: transaction[:attributes][:amount][:value],
        tag: tag.empty? ? "no tag" : tag[0][:id],
        date: parse_datetime(transaction[:attributes][:createdAt])
      }
    end
    transactions
  rescue
    nil
  end

  def self.accounts(api_key)
    accounts = {}
    response = api_call('accounts', api_key)
    response[:data].each do |account|
      accounts[account[:id]] = {
        display_name: account[:attributes][:displayName],
        value: account[:attributes][:balance][:value],
        account_type: account[:attributes][:accountType]
      }
    end
    accounts
  rescue
    nil
  end

  def self.goal_saver(api_key)
    accounts = UpApi.accounts(api_key)
    savers = {}
    accounts.each do |account|
      if account[1][:account_type] == "SAVER"
        savers[account[1][:display_name]] = account[1][:value]
      end
    end
    savers
  rescue
    nil
  end
end




