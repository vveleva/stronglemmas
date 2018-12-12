#!/usr/bin/env ruby
require 'English'
require 'json'

output = `npm --silent run build -- --json`

unless $CHILD_STATUS.success?
  $stderr.puts '======== Error running webpack ==========='
  exit 1
end

stats = JSON.parse(output)

File.open('./public/assets/webpack-asset-manifest.json', 'w') do |f|
  f.write stats['assetsByChunkName'].to_json
end
