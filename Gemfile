source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
gem 'pg', '>= 0.18', '< 2.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
# gem 'redis', '~> 4.0'
gem 'bcrypt', '~> 3.1.7'

gem 'bootsnap', '>= 1.1.0', require: false
gem 'sidekiq'

gem 'active_model_serializers'
gem 'haml'
gem 'kaminari'
gem 'timecop'

# frontend
gem 'actionmailer_inline_css'
gem 'autoprefixer-rails', '9.4.2'
gem 'bootstrap-sass', '~> 3.3.4'
gem 'font-awesome-sass'
gem 'gon', '~> 5.2.3'
gem 'haml-rails'
gem 'react-rails', '~> 2.4.7'

# GraphQL #
gem 'apollo_upload_server', '2.0.0.beta.1'
gem 'graphql'
gem 'graphql-batch'
gem 'graphql-guard'

group :development, :test do
  gem 'awesome_print'
  gem 'byebug'
  gem 'factory_bot_rails'
  gem 'guard'
  gem 'guard-bundler'
  gem 'guard-rspec'
  gem 'pry-byebug'
  gem 'pry-stack_explorer'
  gem 'rspec-rails', '~> 3.7'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'webmock'
end

group :development do
  gem 'annotate'
  gem 'annotate_gem'
  gem 'graphiql-rails'
  gem 'rubocop'
  gem 'rubocop-rspec'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'rspec-sidekiq'
  gem 'rspec_junit_formatter'
end
