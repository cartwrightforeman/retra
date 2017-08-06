class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.where(user_id: current_user.id)
    render json: @boards, adapter: :json
  end

  def show
    @board = Board.find(params[:id])
    render json: { board: @board }
  end

  def create

    data = JSON.parse(request.body.read)
    @board = Board.new(data['board'])
    @board.user_id = current_user.id
    binding.pry
    if @board.save
      @board.initialize_lists(@board.id)
      render json: @board
    end
  end
end
