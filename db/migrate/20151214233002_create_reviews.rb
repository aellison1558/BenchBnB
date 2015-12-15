class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :score, null: false
      t.integer :bench_id, null: false
      t.timestamps null: false
    end

    add_index :reviews, :bench_id
  end
end
