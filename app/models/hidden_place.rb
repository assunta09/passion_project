class HiddenPlace < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :location
  belongs_to :category
  has_many :user_places
  has_many :users, through: :user_places
end

