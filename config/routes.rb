Rails.application.routes.draw do

  ActiveAdmin.routes(self)
  devise_for :users
  root 'visitors#index'
end
