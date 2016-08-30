class CreateMigrations < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :category_name
      t.timestamps
    end

    create_table :locations do |t|
      t.string :location_name
      t.timestamps
    end

    create_table :hidden_places do |t|
      t.string :title
      t.string :description
      t.string :url
      t.timestamps
    end

    create_table :user_places do |t|
      t.timestamps
    end
  end
end
