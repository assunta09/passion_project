COUNTRY_LIST = "db/fixtures/countries.txt"
CATEGORIE_LIST = "db/fixtures/categories.txt"


Country.delete_all
Category.delete_all


File.foreach(COUNTRY_LIST) do |line|
  Country.create(country_name: line.chomp)
end

File.foreach(CATEGORIE_LIST) do |line|
  Category.create(category_name: line.chomp)
end


user_one = User.create(name: "David", email: 'david@rusti.com', password: 'poop')
user_two = User.create(name: "Assunta", email: 'assunta@gmail.com', password: '123')
user_three = User.create(name: "Anton", email: 'anton@gmail.com', password: '123')

# # category_one = Category.where(category_name: "Restaurants").first
# # place_one = user_one.hidden_places.create(title: 'Rooftop Bar', description: "Beautiful view over the city", url: 'www.rooftop.com')
# # place_one.category = category_one
# country_one = Country.where(country_name: 'United States').first
# location_one = Location.create(location_name: 'The View, San Francisco, CA')
# place_one.location = location_one
# location_one.country = country_one

# category_two = Category.where(category_name: "Hotels and Guest Houses").first
# place_two = user_two.hidden_places.create(title: 'Home', description: "Moms cooking", url: 'www.momsthebest.com')
# place_two.category = category_two
# country_two = Country.where(country_name: 'Germany').first
# location_two = Location.create(location_name: 'Spitzelbergerstrasse, Graefelfing')
# place_two.location = location_two
# location_two.country = country_two

# category_three = Category.where(category_name: "Things to Do").first
# place_three = user_three.hidden_places.create(title: 'Dev Bootcamp', description: "Best Bootcamp in town ", url: 'www.dbc.com')
# place_three.category = category_three
# country_three = Country.where(country_name: 'United States').first
# location_three = Location.create(location_name: 'Follsomstreet, San Francisco')
# place_three.location = location_three
# location_three.country = country_three
