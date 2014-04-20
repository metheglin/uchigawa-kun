module ApplicationHelper
  def canonical_url(path)
    domain = 'http://uchigawa-kun.com'
    domain + path
  end

  def convert_page_id(story_id)
    sprintf "%03d", story_id
  end
end
