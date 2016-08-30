class UserPlace < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :user
  belongs_to :hidden_place
end
