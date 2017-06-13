class CreateCheats < ActiveRecord::Migration[5.0]
  def change
    create_table :cheats do |t|

      t.timestamps
    end
  end
end
