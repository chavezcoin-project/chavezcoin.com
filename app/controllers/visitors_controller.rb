class VisitorsController < ApplicationController

  def index
  	@advantages = File.read("#{Rails.root}/public/advantages.json").to_json
    @faqs = File.read("#{Rails.root}/public/faqs.json").to_json
    @posts = File.read("#{Rails.root}/public/blog.json").to_json
    @slider = File.read("#{Rails.root}/public/slider.json").to_json
    @text_yellow = File.read("#{Rails.root}/public/text_yellow.json").to_json
    @text_blue = File.read("#{Rails.root}/public/text_blue.json").to_json
    @text_red = File.read("#{Rails.root}/public/text_red.json").to_json
    @graphicData = File.read("#{Rails.root}/public/transaction.json").to_json
  	@coins = HTTParty.get('http://coinmarketcap.northpole.ro/ticker.json?symbol=ETH%2CBTC%2CGBYTE%2CSNT%2CXRP%2CLTC%2CDOGE%2CXEM%2CDASH%2CIOTA%2CXMR%2CZEC%2CGNO&page=0')
  	puts @coins.body, @coins.code, @coins.message, @coins.headers.inspect
    @markets = HTTParty.get('https://api.cryptonator.com/api/full/btc-usd')
    puts @markets.body, @markets.code, @markets.message, @markets.headers.inspect
  end
end
