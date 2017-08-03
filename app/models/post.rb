class Post < ApplicationRecord
  belongs_to :list

  validates :body, presence: true
end
