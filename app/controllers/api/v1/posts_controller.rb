class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @posts = @list.posts
    render json: {posts: @posts}, adapter: :json
  end

  def new
    binding.pry
    @post = Post.new
  end

  def create
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    data = JSON.parse(request.body.read)
    @post = @list.posts.new(data['post'])
    # binding.pry
    # @post.user_id = current_user.id
    if @post.save
      render json: data["review"]
    end
  end
end
