Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    resources :benches, only: [:index, :show, :create] do
      resources :reviews, only: [:index, :create]
    end
  end
end
