class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.belongs_to :user

      t.string :name, null: false
    end
  end
end
