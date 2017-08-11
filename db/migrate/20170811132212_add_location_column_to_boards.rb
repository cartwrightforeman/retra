class AddLocationColumnToBoards < ActiveRecord::Migration[5.0]
  def change
    add_column :boards, :location, :integer
  end
end
