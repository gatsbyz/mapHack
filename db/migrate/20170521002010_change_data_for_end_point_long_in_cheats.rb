class ChangeDataForEndPointLongInCheats < ActiveRecord::Migration[5.0]
  def change
    change_column :cheats, :end_point_long, :float
  end
end
