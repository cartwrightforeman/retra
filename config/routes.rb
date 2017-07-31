Rails.application.routes.draw do
  root 'static_pages#index'
  # root to: "users#new"
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  namespace :api do
    namespace :v1 do
      resources :lists, only: [:index, :show] do
        resources :posts
      end
    end
  end

end
