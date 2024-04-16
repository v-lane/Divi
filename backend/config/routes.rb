Rails.application.routes.draw do

  namespace :api do
    resources :notifications, only: [:show]
    resources :groups, only: [:show, :create, :update, :destroy]
    resources :member_transactions, only: [:show]
    resources :transactions, only: [:show, :destroy, :create, :update]
    resources :users, only: [:show, :create, :update, :destroy]
  end
end
