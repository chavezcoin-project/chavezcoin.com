ENV['RAILS_ENV'] = 'test'
require 'simplecov'

require './config/environment'
require 'rspec'
require 'spinach/capybara'
require 'spinach/frameworks/rspec'
require 'webmock'
require 'database_cleaner'
DatabaseCleaner.strategy = :truncation

WebMock.disable_net_connect!(allow_localhost: true)
require 'capybara/poltergeist'
require "selenium/webdriver"
Capybara.asset_host = 'http://localhost:3000'
Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end
Capybara.javascript_driver = :chrome
Spinach.hooks.on_tag('javascript') do
  ::Capybara.current_driver = ::Capybara.javascript_driver
end

Spinach.config.save_and_open_page_on_failure = true