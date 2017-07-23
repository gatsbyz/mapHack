class RemoveRouteTypeForCheats < ActiveRecord::Migration[5.0]
  def change
  	  remove_column :cheats, :route_type
  end
end
