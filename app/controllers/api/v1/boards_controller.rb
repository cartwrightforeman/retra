class Api::V1::BoardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.where(user_id: current_user.id)
    render json: @boards, adapter: :json
  end

  def update
    data = JSON.parse(request.body.read)
    binding.pry
    key_check = data.keys
    if key_check[0] == "blocks"
      blocks = Song.find(params[:id]).blocks
      blocks.each do |block|
        data["blocks"].each_with_index do |d, i|
          if d["id"] == block.id
            new_location = (i + 1)
            unless new_location == block.location
              block.location = new_location
              block.save
            end
          end
        end
      end
      song = Song.find(params[:id])
      sorted_blocks = blocks.sort_by{|b| b["location"]}
      render json: {song: song, blocks: sorted_blocks}
    elsif key_check[0] == "song"
      song = Song.find(params[:id])
      song.name = data["song"]["name"]
      song.description = data["song"]["description"]
      song.save
      render json: { message: "Updated Song" }
    end
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
