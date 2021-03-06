class Api::V1::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @posts = @list.posts
    @posts = @list.posts.order(votes: :desc, updated_at: :asc)
    render json: { posts: @posts }, adapter: :json
  end

  def update
    @board = Board.find(params[:board_id])
    @list = @board.lists.find(params[:list_id])
    @post = @list.posts.find(params[:id])
    post_hash = JSON.parse(request.body.read)["post"]
    if post_hash.has_key? "body"
      @post.assign_attributes({
        body: post_hash["body"]
      })
    end
    if post_hash.has_key? "votes"
      @post.assign_attributes({
        votes: post_hash["votes"]
      })
    end
    @posts = @list.posts.push(@post)
    @posts = @posts.order(votes: :desc, updated_at: :asc)
    if @post.save
      render json: { posts: @posts }, adapter: :json
    end
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
    @posts = @list.posts
    @posts = @posts.order(votes: :desc, updated_at: :asc)
    if @post.delete
      render json: @posts
    end
  end
end
