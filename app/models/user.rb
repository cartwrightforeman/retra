class User < ApplicationRecord
  has_many :boards
  has_many :lists, dependent: :destroy
  has_many :posts, through: :lists, dependent: :destroy

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.email = auth["info"]["email"]
      user.image = auth["info"]["image"]
    end
  end
end

# possible dependent destroy for new boards
