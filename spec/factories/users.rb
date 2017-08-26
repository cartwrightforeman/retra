FactoryGirl.define do
  factory :user do
    provider "MyString"
    uid "MyString"
    email { "jane@mail.com" }
  end
end
