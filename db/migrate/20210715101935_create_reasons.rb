class CreateReasons < ActiveRecord::Migration[6.0]
  def change
    create_table :reasons do |t|
      t.text :description
      t.references :goal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
