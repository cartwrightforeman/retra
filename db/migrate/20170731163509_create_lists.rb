class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.belongs_to :board

      t.string :title, null: false
      t.timestamps
    end
  end
end
