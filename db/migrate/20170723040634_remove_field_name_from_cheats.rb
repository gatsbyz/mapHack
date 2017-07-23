class RemoveFieldNameFromCheats < ActiveRecord::Migration[5.0]
  def change
    remove_column :cheats, :email, :string
  end
end
