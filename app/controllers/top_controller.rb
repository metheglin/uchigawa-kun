class TopController < ApplicationController
  def index
    all_stories = UchigawaKun::Application.config.stories
    @stories = Hash[all_stories.to_a.reverse]
  end
end
