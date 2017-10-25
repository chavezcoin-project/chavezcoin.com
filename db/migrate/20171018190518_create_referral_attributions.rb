class CreateReferralAttributions < ActiveRecord::Migration
  def change
    create_table :referral_attributions do |t|
      t.references :user, index: true, foreign_key: true
      t.string :from

      t.timestamps null: false
    end
  end
end
