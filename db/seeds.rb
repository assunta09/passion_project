CATEGORIE_LIST_FILENAME = "db/fixtures/countries.txt"

Country.delete_all

File.foreach(CATEGORIE_LIST_FILENAME) do |line|
  Country.create(country_name: line.chomp)
end
