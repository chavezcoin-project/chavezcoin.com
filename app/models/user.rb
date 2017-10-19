class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  enum role: {
    user: 0,
    admin: 1
  }

  after_create :generate_referrer_key!

  has_one :referral_attribution
  has_many :referrals, foreign_key: 'referred_by'

  def generate_referrer_key!
    if referrer_key.nil?
      update_attribute(:referrer_key, "#{Haikunator.haikunate(0)}-#{id}")
    end
  end
end
