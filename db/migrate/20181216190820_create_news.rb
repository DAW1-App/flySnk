class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :shoeName
      t.text :smallText
      t.text :largeText
      t.datetime :releaseDate
      t.integer :price
      t.string :color

      t.timestamps
    end
  end
end
