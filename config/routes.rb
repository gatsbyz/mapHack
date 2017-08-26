Rails.application.routes.draw do

  devise_for :users
    # devise_for :users, controllers: {
    #   sessions: 'users/sessions',
    #   registrations: 'users/registrations'
    # }

    namespace :api do
    	get '/map' => 'cheats#index'
      get '/cheat' => 'cheats#index'
    	post '/cheat' => 'cheats#create'
      get '/cheat/:id' => 'cheats#show'
      put '/cheat/:id' => 'cheats#update'
      delete '/cheat/:id' => 'cheats#destroy'
    end

    namespace :api do
      get '/user/:id' => 'profile#show'
      put '/user/:id' => 'profile#update'
    end
 
  	root to: 'client#index'
    get '*path', to: 'client#index'
end