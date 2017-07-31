Rails.application.routes.draw do
  # root 'static_pages#index'
  root to: "users#new"
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

#   get '/auth/:provider/callback', :to => 'sessions#create'
# get '/auth/failure', :to => 'sessions#failure'
end
