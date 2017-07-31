Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_CLIENT_ID'], ENV['GITHUB_CLIENT_SECRET'], scope: "user:email,user:follow"
end


# Client ID
# a93b2515ab55c60e0614
# Client Secret
# 2c78739896b9d642d1cc8cf8fecc25266544a08c

# end of url with GITHUB_CLIENT_ID & GITHUB_CLIENT_SECRET
# 47c0bbe1624d098f297c4b462e4b715d735c1f7adf9d5374

#end with client id and secrets
# 4699da3d220856ebe29fe220ec76d1c7236d8e7a1fcaa34b
