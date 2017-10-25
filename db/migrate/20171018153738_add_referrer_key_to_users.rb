class AddReferrerKeyToUsers < ActiveRecord::Migration
  def change
    add_column :users, :referrer_key, :string
  end
end
