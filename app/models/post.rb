class Post < ApplicationRecord
  belongs_to :list

  validates :body, presence: true
  validates :votes, presence: true, inclusion: {in: 0..9}
end
