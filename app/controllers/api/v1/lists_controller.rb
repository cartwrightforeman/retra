class Api::V1::ListsController < ApplicationController
  def index
    render json: List.all, adapter: :json
  end
end
