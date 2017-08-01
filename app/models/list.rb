class List < ApplicationRecord
  belongs_to :board
  has_many :posts

  validates :title, presence: true
end
