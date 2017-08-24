class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
	 	t.string   :email  
	    t.string   :encrypted_password
	    t.string   :reset_password_token
	    t.datetime :reset_password_sent_at
	    t.datetime :remember_created_at
	    t.integer  :sign_in_count     
	    t.datetime :current_sign_in_at
	    t.datetime :last_sign_in_at
	    t.inet     :current_sign_in_ip
	    t.inet     :last_sign_in_ip
	    t.datetime :created_at           
	    t.datetime :updated_at           
	    t.string   :first_name
	    t.string   :last_name
    end
  end
end
