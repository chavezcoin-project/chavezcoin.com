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
  	@coins = 2;
    @markets = 1;
  end
end
