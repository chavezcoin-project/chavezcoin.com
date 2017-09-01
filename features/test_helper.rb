ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/poltergeist'
class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  Capybara.register_driver :poltergeist do |app|
    Capybara::Poltergeist::Driver.new(app, {
      js_errors: false,
      phantomjs_options: ['--ignore-ssl-errors=yes', '--ssl-protocol=any'],
      debug: false,
      timeout: 500,
      phantomjs: File.absolute_path(Phantomjs.path)
    })
  end
  Capybara.javascript_driver = :poltergeist
  Capybara.server_port = 3001
end
