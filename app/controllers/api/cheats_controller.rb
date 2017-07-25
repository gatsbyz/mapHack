class Api::CheatsController < ApplicationController

	def index
		if params[:userId].blank?
			@cheats = Cheat.all
			@currentUser = current_user
			user_array = []
			@cheats.each { |x|
				user_array.push(User.find(x.user_id))
			}
			render json: {cheats: @cheats, currentUser: @currentUser}
		else
			@user = User.find(params[:userId])
    		@cheats = @user.cheats
    		render json: {cheats: @cheats, currentUser: @currentUser, user_array: user_array}
		end

		
		# render json: @cheats.to_json(include: :user)
	end

	def show
		@cheat = Cheat.find_by_id(params[:id]) #includes comments + user name
		render json: @cheat.to_json(include: :user)
	end

	def create
	  	@cheat = Cheat.new(cheat_params)

	    if @cheat.save
			render json: @cheat, status: :created
	    else
			render json: @cheat.errors, status: :unprocessable_entity
		end
    end

	def update
	  	@cheat = current_user.cheats.find(params[:id])

		if @cheat.update(cheat_params)
	      	render json: @cheat, status: :ok
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
			.permit(:description, :start_point_lat, :start_point_long, :end_point_lat, :end_point_long, :route_type)
			.merge(user_id: current_user.id)
	end
end