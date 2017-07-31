class Api::V1::BoardsController < ApplicationController
  def index
    render json: Board.all, adapter: :json
  end
end
