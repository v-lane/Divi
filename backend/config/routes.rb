Rails.application.routes.draw do

  namespace :api do
    resources :notifications, only: [:show]
    resources :groups, only: [:show, :create, :update, :destroy]
    resources :member_transactions
    resources :transactions, only: [:show, :destroy, :create, :update]
    resources :users, only: [:show, :create, :update, :destroy]
    resources :user_groups, only: [:show, :create]
  end

  get 'api/users_email/:email', to: 'api/users#show_by_email', as: 'user_by_email'
end
