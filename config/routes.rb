Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/transactions', to: 'pages#transactions'

  get '/calculator', to: 'pages#calculator'


  get '/dashboard', to: 'pages#dashboard'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :goals, only: [:create, :destroy, :update]
end
