class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :name
      t.date :due_date
      t.integer :amount
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
