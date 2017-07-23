class AddRouteTypeToCheats < ActiveRecord::Migration[5.0]
  def change
    add_column :cheats, :route_type, :string, array: true, default: []
  end
end
