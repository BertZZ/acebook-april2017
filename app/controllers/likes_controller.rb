class LikesController < ApplicationController
  def new
    @like = Like.new
  end

  def create
    @like = Like.create(like_params)
  end

  private

  def like_params
    params.permit(:user_id, :post_id)
  end
end
