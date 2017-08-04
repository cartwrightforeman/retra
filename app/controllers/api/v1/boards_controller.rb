class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Board.all, adapter: :json
  end

  def show
    @board = Board.find(params[:id])
    render json: { board: @board }
  end

  def create
    data = JSON.parse(request.body.read)
    @board = Board.new(data['board'])
    @board.user_id = current_user.id
    if @board.save
      @board.initialize_lists(@board.id)
      binding.pry
      render json: @board
    end
  end
end
