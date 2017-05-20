Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }

    namespace :api do
    	get '/map' => 'cheats#index'
    	post '/cheat' => 'cheats#create'
    end
 
  	root to: 'client#index'
	get '*path', to: 'client#index'
end
