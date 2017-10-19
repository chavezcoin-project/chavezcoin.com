class CreateReferrals < ActiveRecord::Migration
  def change
    create_table :referrals do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :referred_by

      t.timestamps null: false
    end
  end
end
