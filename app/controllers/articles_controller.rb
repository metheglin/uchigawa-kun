class ArticlesController < ApplicationController
  def show
    page_id = convert_page_id params[:id]
    unless @story = UchigawaKun::Application.config.stories[page_id.to_s]
      render :nothing => true, :status => 404
    end

    @story[:directed_by] ||= UchigawaKun::Application.config.default_directed_by
    @story[:produced_by] ||= UchigawaKun::Application.config.default_produced_by
    
    abs_image_path = Rails.root.join('app', 'assets', 'images', page_id, 'manga*.png')
    @page_images = Dir::glob(abs_image_path).sort.map do |page_image|
      page_id + '/' + page_image.split('/').last
    end
  end
end
