class Api::CheatsController < ApplicationController

	def index
		@cheats = Cheat.all
		@user = current_user
		render json: { cheats: @cheats, currentUser: @user }
	end

	def create
	  	@cheat = Cheat.new(cheat_params)

	    if @cheat.save
			render json: @cheat, status: :created
	    else
			render json: @cheat.errors, status: :unprocessable_entity
    end

	private
	# Only allow a trusted parameter "white list" through.
	# Also we want to add the current_user's id to the hash
	# We can do that with .merge
	def cheat_params
		params.require(:cheat)
			.permit(:description)
			.merge(user_id: current_user.id)
	end

end