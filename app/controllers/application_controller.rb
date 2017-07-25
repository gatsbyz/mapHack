class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	before_action :authenticate_user!


	def not_found
	 	raise ActionController::RoutingError.new('Record Not Found')
	end
end