FactoryGirl.define do
  factory :message do
    text Faker::Lorem.sentence #文を作成するFAEKR
    image File.open("#{Rails.root}/public/images/sample.jpg") #File.openメソッド　指定したファイルを開く
    user
    group
end
end
