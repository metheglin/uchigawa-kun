# encoding: utf-8

require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module UchigawaKun
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    
    config.default_directed_by = 'metheglin'
    config.default_produced_by = 'metheglin'
    config.stories = {
      '001' => {
        story_id: '1',
        title: '黄色い線のうちがわくん登場！',
        description: '2014年、アベノミクス奏功。景気わりと快調。一時80円台を切る恐るべき円高も次第に解消。ここは茅場町。トレーダーでにぎわう東証。いっぽう...',
        publish_at: '2014/04/20',
      }
    };
  end
end
