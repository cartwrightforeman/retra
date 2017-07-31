class Board < ApplicationRecord
  belongs_to :user
  has_many :lists

  validates :user, presence: true
end
