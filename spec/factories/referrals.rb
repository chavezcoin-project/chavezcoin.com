FactoryGirl.define do
  factory :referral do
    user
    referred_by { user.id }
  end
end
