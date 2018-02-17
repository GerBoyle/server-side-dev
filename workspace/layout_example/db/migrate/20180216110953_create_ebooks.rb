class CreateEbooks < ActiveRecord::Migration[5.1]
  def change
    create_table :ebooks do |t|
      t.string :title
      t.string :author
      t.decimal :price

      t.timestamps
    end
  end
end
