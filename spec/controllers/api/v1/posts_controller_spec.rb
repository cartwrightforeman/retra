require 'rails_helper'

RSpec.describe Api::V1::ListsController, type: :controller do
  before(:each) do
    @user = FactoryGirl.create(:user, name: 'Super User', uid: '12345', provider: "GitHub", email: 'super@user.com')
    @board = FactoryGirl.create(:board, user: @user, id: '1')
    @list = FactoryGirl.create(:list, title: 'title', board: @board)
    create(:post,  list: @list, id: '1')
  end

  describe "GET#index" do
    it "should return a list of all lists" do
      get :index, params:{board_id:1, list_id:1}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1
      expect(returned_json["lists"].length).to eq 1
    end
  end
end
