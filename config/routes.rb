Rails.application.routes.draw do
  resources :news
  # get 'news/admin_new'
  get 'shoes/admin_shoe'
  devise_for :users
  root 'welcome#index'
  resources :shoes
  # get 'shoes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
