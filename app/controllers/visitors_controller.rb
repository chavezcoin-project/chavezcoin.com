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

    if params["format"]
      @visitor_country['countryCode'] = params["format"]
    end

    if @visitor_country['countryCode'] == 'ES' || @visitor_country['countryCode'] == 'VE' || @visitor_country['countryCode'] == 'MX' || @visitor_country['countryCode'] == 'AR' || @visitor_country['countryCode'] == 'BO' || @visitor_country['countryCode'] == 'CL' || @visitor_country['countryCode'] == 'CO' || @visitor_country['countryCode'] == 'EC' || @visitor_country['countryCode'] == 'ES' || @visitor_country['countryCode'] == 'JM' || @visitor_country['countryCode'] == 'PA' || @visitor_country['countryCode'] == 'PY' || @visitor_country['countryCode'] == 'PE' || @visitor_country['countryCode'] == 'PR' || @visitor_country['countryCode'] == 'DO' || @visitor_country['countryCode'] == 'UY' || @visitor_country['countryCode'] == 'CU'
      @advantages = File.read("#{Rails.root}/public/advantages.json")
      @faqs = File.read("#{Rails.root}/public/faqs.json")
      @text_yellow = File.read("#{Rails.root}/public/text_yellow.json")
      @text_blue = File.read("#{Rails.root}/public/text_blue.json")
      @text_red = File.read("#{Rails.root}/public/text_red.json")
      @posts = File.read("#{Rails.root}/public/blog.json")
    else
      @advantages = File.read("#{Rails.root}/public/advantagesEnglish.json")
      @faqs = File.read("#{Rails.root}/public/faqsEnglish.json")
      @text_yellow = File.read("#{Rails.root}/public/text_yellowEnglish.json")
      @text_blue = File.read("#{Rails.root}/public/text_blueEnglish.json")
      @text_red = File.read("#{Rails.root}/public/text_redEnglish.json")
      @posts = File.read("#{Rails.root}/public/blogEnglish.json")
    end
  end
end
