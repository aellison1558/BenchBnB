class AddSeatingToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :seating, :integer
    add_index :benches, :seating
  end
end
