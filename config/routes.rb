Rails.application.routes.draw do
  # get 'accounts' => 'accounts/home#index', as: :user_account_root
  get '/' => 'api/v1/dashboard#index'
  post "/graphql", to: "graphql#execute"

  namespace :api do
    namespace :v1 do
      resources :definitions
    end
  end
end
