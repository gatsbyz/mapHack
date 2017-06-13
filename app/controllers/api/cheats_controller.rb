class Api::CheatsController < ApplicationController

	def index
		@cheats = Cheat.all
		@currentUser = current_user
		user_array = []
		@cheats.each { |x|
			user_array.push(User.find(x.user_id))
		}
		render json: {cheats: @cheats, currentUser: @currentUser, user_array: user_array}
		# render json: @cheats.to_json(include: :user)
	end

	def show
		@cheat = Cheat.find(params[:id]) #includes comments + user name
		render json: @cheat.to_json(include: :user)
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

    def destroy
    @cheat = current_user.cheats.find(params[:id])
    @cheat.destroy

    render json: '', status: :no_content
  	end

	private

	def cheat_params
		params.require(:cheat)
			.permit(:description, :start_point_lat, :start_point_long, :end_point_lat, :end_point_long)
			.merge(user_id: current_user.id)
	end
end