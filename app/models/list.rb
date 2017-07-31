class List < ApplicationRecord
  belongs_to :user
  has_many :posts

  validates :user, presence: true
  validates :title, presence: true
end
