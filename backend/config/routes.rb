Rails.application.routes.draw do

  namespace :api do
    resources :notifications, only: [:show]
    resources :groups, only: [:show, :create, :update, :destroy]
    resources :member_transactions, only: [:show]
    resources :transactions, only: [:show, :destroy, :create, :update]
    resources :users, only: [:show, :create, :update, :destroy]
    resources :user_groups, only: [:index, :show, :create]
  end

  get 'api/users_email/:email', to: 'api/users#show_by_email', as: 'user_by_email'
  delete '/api/users/:id', to: 'users#destroy'
  get 'api/users_by_group/:id', to: 'api/groups#show_by_group', as: 'users_by_group'
  get 'api/transactions_by_group/:id', to: 'api/transactions#show_by_group', as: 'transactions_by_group'
end
