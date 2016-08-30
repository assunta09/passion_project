class Location < ActiveRecord::Base
  # Remember to create a migration!
  has_many :hidden_places
  belongs_to :country
end
