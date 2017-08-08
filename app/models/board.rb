class Board < ApplicationRecord
  belongs_to :user
  has_many :lists

  validates :user, presence: true
  validates :name, presence: true

  def initialize_lists(board_id)
    List.create("title": "Happy", "board_id": board_id)
    List.create("title": "Meh", "board_id": board_id)
    List.create("title": "Sad", "board_id": board_id)
    List.create("title": "Action", "board_id": board_id)
    List.create("title": "Discussion", "board_id": board_id)
  end
end
