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
