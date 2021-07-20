class ChangeDueDateToGoals < ActiveRecord::Migration[6.0]
  def change
    change_column(:goals, :due_date, :string)
  end
end
