class ArticlesController < ApplicationController
  def show
    page_id = convert_page_id params[:id]
    unless @story = UchigawaKun::Application.config.stories[page_id.to_s]
      render :nothing => true, :status => 404
    end
    
    abs_image_path = Rails.root.join('app', 'assets', 'images', page_id, 'manga*.png')
    @page_images = Dir::glob(abs_image_path).map do |page_image|
      page_id + '/' + page_image.split('/').last
    end
  end
end
