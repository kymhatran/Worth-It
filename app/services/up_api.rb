require 'rest-client'
require 'json'

class UpApi

  def self.transactions
    transactions = {}
    data = RestClient.get "https://api.up.com.au/api/v1/transactions",
              {:Authorization => "Bearer #{ENV['UP_API_KEY']}"}
    response = JSON.parse(data, :symbolize_names => true)
    response[:data].each do |transaction|
      tag = transaction[:relationships][:tags][:data]
      # parsed = DateTime.parse(transaction[:attributes][:createdAt])
      # time = Time.parse(parsed + 36000).strftime("%d/%m/%y %H:%M")
      transactions[transaction[:id]] = {
        description: transaction[:attributes][:description],
        value: transaction[:attributes][:amount][:value],
        tag: tag.empty? ? "yes" : tag[0][:id],
        date: transaction[:attributes][:createdAt]
      }
    end
    transactions
  end

  def self.accounts
    data = RestClient.get "https://api.up.com.au/api/v1/accounts",
            {:Authorization => "Bearer #{ENV['UP_API_KEY']}"}
  end

end

