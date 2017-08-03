class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @posts = @list.posts
    render json: { posts: @posts }, adapter: :json
  end

  def edit
    # get, form
  end

  def update
    # post
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
      render json: @post
    end
  end

  def destroy
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @post = @list.posts.find(params[:id])
    @post.delete
    @list = @board.lists.find(params[:list_id])
    if @post.delete
      render json: @list
    end
  end
end
