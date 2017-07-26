class CreateSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :settings do |t|
      t.string :user_id
      t.string :metric

      t.timestamps
    end
  end
end
