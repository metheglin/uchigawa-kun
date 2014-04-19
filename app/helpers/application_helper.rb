module ApplicationHelper
  def convert_page_id(story_id)
    sprintf "%03d", story_id
  end
end
