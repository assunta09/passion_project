class Country < ActiveRecord::Base
  # Remember to create a migration!
  has_many :locations
  has_many :hidden_places, through: :locations
end
