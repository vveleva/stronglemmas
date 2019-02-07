Rails.application.config.assets.paths << Rails.root.join('node_modules')
Rails.application.config.assets.precompile += %w(
  react_support.js
  test.css
  dashboard.css
)
