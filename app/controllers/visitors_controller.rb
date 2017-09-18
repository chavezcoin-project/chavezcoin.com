class VisitorsController < ApplicationController
  def index
    @graphicData = File.read("#{Rails.root}/public/transaction.json").to_json
    @coins = HTTParty.get('https://coinmarketcap-nexuist.rhcloud.com/api/all')
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
    @slider = File.read("#{Rails.root}/public/slider.json").to_json
    @SliderDeviceTablet = File.read("#{Rails.root}/public/sliderDeviceTablet.json").to_json
    @sliderDevice = File.read("#{Rails.root}/public/sliderDevice.json").to_json
    if @visitor_country['countryCode'] == 'VE' || @visitor_country['countryCode'] == 'MX' || @visitor_country['countryCode'] == 'AR' || @visitor_country['countryCode'] == 'BO' || @visitor_country['countryCode'] == 'CL' || @visitor_country['countryCode'] == 'CO' || @visitor_country['countryCode'] == 'EC' || @visitor_country['countryCode'] == 'ES' || @visitor_country['countryCode'] == 'JM' || @visitor_country['countryCode'] == 'PA' || @visitor_country['countryCode'] == 'PY' || @visitor_country['countryCode'] == 'PE' || @visitor_country['countryCode'] == 'PR' || @visitor_country['countryCode'] == 'DO' || @visitor_country['countryCode'] == 'UY' || @visitor_country['countryCode'] == 'CU'
      @advantages = File.read("#{Rails.root}/public/advantages.json").to_json
      @faqs = File.read("#{Rails.root}/public/faqs.json").to_json
      @text_yellow = File.read("#{Rails.root}/public/text_yellow.json").to_json
      @text_blue = File.read("#{Rails.root}/public/text_blue.json").to_json
      @text_red = File.read("#{Rails.root}/public/text_red.json").to_json
      @posts = File.read("#{Rails.root}/public/blog.json").to_json
    else
      @advantages = File.read("#{Rails.root}/public/advantagesEnglish.json").to_json
      @faqs = File.read("#{Rails.root}/public/faqsEnglish.json").to_json
      @text_yellow = File.read("#{Rails.root}/public/text_yellowEnglish.json").to_json
      @text_blue = File.read("#{Rails.root}/public/text_blueEnglish.json").to_json
      @text_red = File.read("#{Rails.root}/public/text_redEnglish.json").to_json
      @posts = File.read("#{Rails.root}/public/blogEnglish.json").to_json
    end
  end
end
