class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @posts = @list.posts
    render json: {posts: @posts}, adapter: :json
  end

  def edit
    #get, form
  end

  def update
    #post
    binding.pry
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @post = @list.posts.find(params[:id])

  end

  def create
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    data = JSON.parse(request.body.read)
    @post = @list.posts.new(data['post'])
    if @post.save
      render json: data["post"]
    end
  end

  def destroy
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @post = @list.posts.find(params[:id])
    # data = JSON.parse(request.body.read)
    @post.delete
    # if @post.delete
    #   render json: data["post"]
    # end
  end
end
