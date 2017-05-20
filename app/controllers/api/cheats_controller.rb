class Api::CheatsController < ApplicationController

	def index
		@cheats = Cheat.all
		@user = current_user
		render json: { cheats: @cheats, currentUser: @user }
	end

	def show
		@cheat = Cheat.find(params[:id]) #includes comments + user name
		render json: @cheats.to_json(include: :user)
    # render json: @posts.to_json(include: :user)
	end

	def create
	  	@cheat = Cheat.new(cheat_params)

	    if @cheat.save
			render json: @cheat, status: :created
	    else
			render json: @cheat.errors, status: :unprocessable_entity
		end
    end

	private

	def cheat_params
		params.require(:cheat)
			.permit(:description, :start_point_lat, :start_point_long, :end_point_lat, :end_point_long)
			.merge(user_id: current_user.id)
	end
end