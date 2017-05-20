class CreateCheats < ActiveRecord::Migration[5.0]
  def change
    create_table :cheats do |t|
      t.text :description
      t.integer :start_point_lat
      t.integer :start_point_long
      t.integer :end_point_lat
      t.integer :end_point_long
      t.integer :user_id
      t.integer :raiting

      t.timestamps
    end
  end
end
