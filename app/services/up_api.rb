require 'rest-client'
require 'json'

def api_call(url)
  data = RestClient.get "https://api.up.com.au/api/v1/#{url}",
            {:Authorization => "Bearer #{ENV['UP_API_KEY']}"}
  JSON.parse(data, :symbolize_names => true)
end

def parse_datetime(datetime)
  temp = DateTime.parse(datetime)
  temp.strftime("%d/%m/%y %H:%M %A")
end

def error(response)
  case response.code
  when 401
    puts "Api key is wrong"
  when 404
    puts "Not sure"
  when 500,502,503,504
    puts "Somethings wrong with Up please try again later"
  end
end

class UpApi

  def self.transactions
    transactions = {}
    response = api_call('transactions')
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
    error(response)
  end

  def self.accounts
    accounts = {}
    response = api_call('accounts')
    response[:data].each do |account|
      accounts[account[:id]] = {
        display_name: account[:attributes][:displayName],
        value: account[:attributes][:balance][:value],
        account_type: account[:attributes][:accountType]
      }
    end
    accounts
  rescue
    error(response)
  end

  def self.goal_saver
    accounts = UpApi.accounts
    savers = {}
    accounts.each do |account|
      if account[1][:account_type] == "SAVER"
        savers[account[1][:display_name]] = account[1][:value]
      end
    end
    savers
  end
end




