# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lists = ["Happy", "Meh", "Sad", "Discussion", "Action"]

# if board requires user presence then use first user as seed
User.create(uid: '8675309', name: 'super user', email: 'super@user.com')
Board.find_or_create_by("name": 'Test', "user_id": User.find_by(name: "super user").id)
# Board.create()

lists.each do |list_name|
  List.find_or_create_by!("title": list_name, "board_id": Board.find_by(id: 1).id)
end
