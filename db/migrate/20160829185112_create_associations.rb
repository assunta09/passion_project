class CreateAssociations < ActiveRecord::Migration
  def change
    # user_places
    add_reference :user_places, :user
    add_reference :user_places, :place

    # locations
    add_reference :locations, :country

    # hidden_places
    add_reference :hidden_places, :location
    add_reference :hidden_places, :category
  end
end
