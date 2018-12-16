class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :shoeName
      t.string :smallText
      t.string :largeText
      t.datetime :releaseDate
      t.integer :price
      t.string :color

      t.timestamps
    end
  end
end
