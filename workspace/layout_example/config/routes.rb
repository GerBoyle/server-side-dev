Rails.application.routes.draw do
  resources :ebooks
  resources :books
  resources :users
  
  root "books#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
