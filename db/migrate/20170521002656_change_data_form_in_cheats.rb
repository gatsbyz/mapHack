class ChangeDataFormInCheats < ActiveRecord::Migration[5.0]
  def change
  	change_column :cheats, :start_point_lat, :float
  end
end
