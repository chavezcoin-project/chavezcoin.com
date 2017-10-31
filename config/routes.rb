Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  scope "(:locale)", :locale => /es|en|ch|kr/ do
    devise_for :users, controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }
    devise_scope :user do
      get '/account/overview' => 'registrations#overview'
    end
    root 'visitors#index'

    get 'referrals' => 'referrals#index'
  end
end
