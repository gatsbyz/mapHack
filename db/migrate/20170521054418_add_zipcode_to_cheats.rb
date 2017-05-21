class AddZipcodeToCheats < ActiveRecord::Migration[5.0]
  def change
  	add_column :cheats, :zipcode, :integer
  end
end
