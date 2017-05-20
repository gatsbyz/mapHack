class RenameRatingInCheatModel < ActiveRecord::Migration[5.0]
  def change
  	rename_column :cheats, :raiting, :rating
  end
end
