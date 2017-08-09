class PostSerializer < ActiveModel::Serializer
  attributes :id, :body, :votes
end
