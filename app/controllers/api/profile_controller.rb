class Api::ProfileController < ApplicationController

	def show
		@currentUser = current_user
		render json: {currentUser: @currentUser}
	end
	
end