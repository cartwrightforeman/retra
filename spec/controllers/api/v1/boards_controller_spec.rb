require 'rails_helper'

RSpec.describe Api::V1::BoardsController, type: :controller do
  before(:each) do
    @user = FactoryGirl.create(:user, name: 'Super User', uid: '12345', provider: "GitHub", email: 'super@user.com')
    create(:board, user: @user, id: '1')
  end

  describe "GET#index" do
    it "should return a list of all boards" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1
      expect(returned_json["boards"].length).to eq 1
    end
  end
end
