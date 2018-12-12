require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Stronglemmas
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.webpack = {
      use_manifest: false,
      asset_manifest: {},
      common_manifest: {},
    }

    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.api_only = true

    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif developers/swagger.js)

    config.active_support.escape_html_entities_in_json = false

    # config.active_record.raise_in_transactional_callbacks = true

    config.generators do |g|
      g.orm :active_record, primary_key_type: :uuid
      g.fixture_replacement :factory_girl, dir: 'spec/factories', suffix: 'factory'
      g.helper false
      g.helper_specs false
      g.test_framework :rspec
      g.view_specs false
    end
  end
end
