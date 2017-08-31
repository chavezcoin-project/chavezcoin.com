ENV['RAILS_ENV'] = 'test'

require './config/environment'
require 'rspec'
require 'spinach/capybara'
require 'spinach/frameworks/rspec'
require 'webmock'

require 'capybara/poltergeist'
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app,
    js_errors: false)
end
Capybara.javascript_driver = :poltergeist

# require 'selenium-webdriver'
# Capybara.register_driver :selenium do |app|
#   Capybara::Selenium::Driver.new(app, :browser => :chrome)
# end

# Capybara.javascript_driver = :selenium

Spinach.hooks.on_tag('javascript') do
  ::Capybara.current_driver = ::Capybara.javascript_driver
end

Spinach.config.save_and_open_page_on_failure = true