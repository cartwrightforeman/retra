class Post < ApplicationRecord
  belongs_to :list

  validates :body, presence: true
  validates :votes, presence: true
end
