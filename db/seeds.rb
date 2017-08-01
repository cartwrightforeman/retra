# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lists = ["Happy", "Meh", "Sad", "Discussion", "Action"]

# to seed first create a user and then use first user as seed

Board.find_or_create_by("user_id": User.find_by(name: "Cartwright Foreman").id)

lists.each do |list_name|
  List.find_or_create_by!("title": list_name, "board_id": Board.find_by(id: 1).id)
end
