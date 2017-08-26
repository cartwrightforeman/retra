require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :boards }

  it { should have_valid(:uid).when('213245') }
  it { should have_valid(:email).when('Github@provides.com') }
  it { should have_valid(:image).when('githubprovidestheimage') }
end
