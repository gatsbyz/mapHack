class AddModeToCheats < ActiveRecord::Migration[5.0]
  def change
    add_column :cheats, :email, :string
  end
end
