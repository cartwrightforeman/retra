class List < ApplicationRecord
  belongs_to :meeting
  has_many :posts

  validates :user, presence: true
  validates :title, presence: true
end
