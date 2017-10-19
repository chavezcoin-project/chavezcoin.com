FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password 'please123'
  end
end
