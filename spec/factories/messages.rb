FactoryGirl.define do
  factory :message do
    text Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/sample.jpg")
    user
    group
  end
end
