source 'https://rubygems.org'
ruby '~> 2.3.3'

gem 'rails', '~> 4.2.9'
gem 'sass-rails', '~> 5.0.6'
gem 'sprockets-rails', '~> 3.2.0'
gem 'sprockets', '~> 3.7.0'
gem 'sprockets-es6', '~> 0.9.2' # NOTE: This goes away when we can hit sprockets 4 again
gem 'babel-transpiler'
gem 'pg', '~> 0.20.0'
gem 'clockwork'      # cron-like scheduler
gem 'sidekiq'        # background jobs
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.0' # Build json responses
gem 'puma' # webserver
gem 'sinatra', require: nil # for sidekiq dashboard
gem 'activeadmin', github: 'activeadmin' # Admin interface
gem 'active_admin_theme' # Theme up activeadmin a bit, flatter
gem 'devise'          # authentication
gem 'pundit'          # authorization
gem 'skywalker'
gem "react-rails"
gem "httparty"
gem "whenever"

# heroku-like uniqueish ids
gem 'haikunator'

## Asset bits
gem 'therubyracer'
gem 'haml', '~> 4.0.7'
gem 'foundation-rails', '~> 6.1.2.0'
gem 'foundation-icons-sass-rails'
gem 'gravtastic'
gem 'font-awesome-rails'
gem 'purecss-sass', '~> 0.6.2'
gem 'activeadmin_hstore_editor'

# Helpers for meta tags
gem 'meta-tags'

## Render markdown
gem 'redcarpet'
gem 'markerb'

## Truncate HTML
gem 'html_truncator', '~> 0.2'

## Slugs
gem 'friendly_id', '~> 5.1.0'

## Push notifications
gem 'urbanairship', '~> 3.2.1'

## Decorate gem models and such
gem 'decorators', '~> 2.0.1'

## Postgres fulltext search convenience
gem 'textacular', '~> 3.0'

gem 'state_machines-activerecord'
gem 'public_activity'

## Deploy


group :development do
  gem 'pre-commit', require: false
  gem 'rubocop', require: false
  gem 'rack-mini-profiler' # nice window showing request problems on all pages
  gem 'better_errors'
  gem 'guard', require: false
  gem 'guard-livereload', require: false
  gem 'rack-livereload'
  gem 'web-console', '~> 2.0'
  gem 'capistrano', '~> 3.7', '>= 3.7.1'
  gem 'capistrano-rails', '~> 1.2'
  gem 'capistrano-passenger', '~> 0.2.0'
  gem 'capistrano-rbenv', '~> 2.1'
end

group :development, :test do
  gem 'brakeman', require: false
  gem 'byebug'
  gem 'pry'
  gem 'factory_girl_rails'
  gem 'faker', '~> 1.7.1'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
  gem 'shoulda-callback-matchers', '~> 1.1.1'
  gem 'spinach-rails'
  gem 'wkhtmltopdf-binary-edge', '~> 0.12.4.0' # PDFkit works on env development & test

  # Generate API documentation from request specs
  gem 'rspec_api_documentation'
end

group :test do
  gem 'puffing-billy'
  gem 'thin'
  gem 'capybara'
  gem 'chromedriver-helper'
  gem 'database_cleaner'
  gem 'launchy', require: false
  gem 'selenium-webdriver'
  gem 'poltergeist'
  gem 'webmock'
  gem 'simplecov', require: false
  gem 'simplecov-json', require: false
  gem 'simplecov-rcov', require: false
  gem 'fake_braintree', require: false
  gem 'timecop'
  gem 'clockwork-test'
end

group :production do
  ## Application Monitoring
  gem 'skylight', '1.0.1'
end
group :production, :staging do
  ## Enable rack timeouts
  gem 'rack-timeout'

  # gem 'bugsnag' # bugsnag.com
end
