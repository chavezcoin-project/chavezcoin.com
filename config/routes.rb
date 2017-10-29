Rails.application.routes.draw do
  ActiveAdmin.routes(self)

  devise_for :users, controllers: {
    sessions: 'sessions',
    registrations: 'registrations'
  }
  devise_scope :user do
    get '/account/overview' => 'registrations#overview'
  end

  root 'visitors#index'

  get ":format", to: "visitors#index"

  get 'referrals' => 'referrals#index'
end
