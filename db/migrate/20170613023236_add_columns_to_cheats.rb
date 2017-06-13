class AddColumnsToCheats < ActiveRecord::Migration[5.0]
  def change
    add_column :cheats, :description, :text
    add_column :cheats, :start_point_lat, :float
    add_column :cheats, :start_point_long, :float
    add_column :cheats, :end_point_lat, :float
    add_column :cheats, :end_point_long, :float
    add_column :cheats, :user_id, :integer
    add_column :cheats, :rating, :integer
    add_column :cheats, :email, :string
  end
end
