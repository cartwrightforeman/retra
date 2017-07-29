Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['a93b2515ab55c60e0614'], ENV['2c78739896b9d642d1cc8cf8fecc25266544a08c'], scope: "user:email,user:follow"
end
