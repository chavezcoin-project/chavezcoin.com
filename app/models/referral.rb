class Referral < ActiveRecord::Base
  belongs_to :user
  belongs_to :referrer_by, class_name: 'User', foreign_key: :referrer_by
end
