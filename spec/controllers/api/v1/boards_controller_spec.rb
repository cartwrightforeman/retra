# require 'rails_helper'
#
# RSpec.describe Api::V1::BoardsController, type: :controller do
#   before(:each) do
#     @user1 = create(:user, provider: "GitHub", uid: "8675309", name: "Robin Freeman")
#     @board1 = create(:board, name:)
#     @user1_sign_in
#   end
#
#
#   describe "GET#index" do
#     it "should return a list of all states" do
#       get :index
#       returned_json = JSON.parse(response.body)
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq "application/json"
#
#       expect(returned_json.length).to eq 1
#       expect(returned_json["states"].length).to eq 1
#
#       expect(returned_json["states"][0]["full_name"]).to eq "Florida"
#
#     end
#   end
#
#   describe "GET#show" do
#     it "should return a list of all states" do
#       get :show, params: { id: @state1.id }
#       returned_json = JSON.parse(response.body)
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq "application/json"
#
#       expect(returned_json.length).to eq 1
#       expect(returned_json["state"]["full_name"]).to eq "Florida"
#
#     end
#   end
# end
