class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.where(user_id: current_user.id)
    @boards = @boards.order(location: :asc)
    render json: @boards, adapter: :json
  end

  def update
    data = JSON.parse(request.body.read)
    @boards = Board.where(user_id: current_user.id)
    @boards.each do |board|
      data["boards"].each_with_index do |data_board, i|
        if data_board["id"] == board.id
          new_location = (i + 1)
          unless new_location == board.location
            board.location = new_location
            board.save
          end
        end
      end
    end
    sorted_boards = @boards.sort_by{|b| b["location"]}
    render json: {boards: sorted_boards}
  end

  def show
    @board = Board.find(params[:id])
    if !current_user.nil? && current_user.id === @board.user_id
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
