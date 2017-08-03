require 'rails_helper'

RSpec.describe List, type: :model do
  it { should belong_to(:board) }
  it { should have_many :posts }
end
