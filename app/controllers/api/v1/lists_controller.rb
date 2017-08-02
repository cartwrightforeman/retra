class Api::V1::ListsController < ApplicationController
  def index
    @board = Board.find(params[:board_id])
    @lists = @board.lists
    render json: @lists, adapter: :json
  end
end
