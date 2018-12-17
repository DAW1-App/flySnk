# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
#
# TODO para poder usar css's de la carpeta stylesheets en las vistas individualmente
Rails.application.config.assets.precompile += %w( login.css )
Rails.application.config.assets.precompile += %w( carousel.css )
Rails.application.config.assets.precompile += %w( card.css )
Rails.application.config.assets.precompile += %w( material/icon.css )
Rails.application.config.assets.precompile += %w( material/material.blue-orange.min.css )
Rails.application.config.assets.precompile += %w( app/assets/stylesheets/release.css)

Rails.application.config.assets.precompile += %w( login_validation.js )
Rails.application.config.assets.precompile += %w( jquery.validate.js )
Rails.application.config.assets.precompile += %w( validator.js )
Rails.application.config.assets.precompile += %w( sweetalert2.all.min.js )
Rails.application.config.assets.precompile += %w( sweetAlerts.js )



