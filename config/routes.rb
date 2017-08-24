Rails.application.routes.draw do
  root 'static_pages#index'
  get '/boards', to: 'static_pages#index'
  get '/boards/:board_id', to: 'static_pages#index'
  get "/auth/:provider/callback" => "sessions#create"
  get "/signout" => "sessions#destroy", :as => :signout

  namespace :api do
    namespace :v1 do
      resources :boards, only: [:index, :update, :show, :create] do
        resources :lists, only: [:index] do
          resources :posts, only: [:index, :update, :create, :destroy]
        end
      end
    end
  end

end
