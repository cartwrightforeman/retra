class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.where(user_id: current_user.id)
    render json: @boards, adapter: :json
  end

  def show
    # binding.pry
    @board = Board.find(params[:id])
    if current_user != nil && current_user.id === @board.user_id
      render json: { board: @board }
    end
    if current_user == nil
      render json: { errors: ["Oops! This isn't yours!"] }, status: 404
    end
  end

  def create

    data = JSON.parse(request.body.read)
    @board = Board.new(data['board'])
    @board.user_id = current_user.id
    if @board.save
      @board.initialize_lists(@board.id)
      render json: @board
    end
  end
end
