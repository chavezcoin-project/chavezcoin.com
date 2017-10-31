class VisitorsController < ApplicationController
  def index
    @graphicData = File.read("#{Rails.root}/public/transaction.json")
    @coins = HTTParty.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    puts @coins.body, @coins.code, @coins.message, @coins.headers.inspect
    @markets = {
      ticker:
      {
        markets:
        {
          market: "Chavezchange",
          price: "1.00",
          volume: 3.2895
        },
        volume: "3.2895"
      },
      timestamp: '1505293381'
    }
    @markets = @markets.to_json
    @slider = File.read("#{Rails.root}/public/slider.json")
    @SliderDeviceTablet = File.read("#{Rails.root}/public/sliderDeviceTablet.json")
    @sliderDevice = File.read("#{Rails.root}/public/sliderDevice.json")

  end
end
