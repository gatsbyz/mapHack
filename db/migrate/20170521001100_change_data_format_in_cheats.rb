class ChangeDataFormatInCheats < ActiveRecord::Migration[5.0]
 def change
    change_column :cheats, :start_point_long, :float
  end
end
