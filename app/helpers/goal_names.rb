module GoalNames
  def goal_names(goals, user)
    goal_names = []
    goals.each do |goal|
      if goal.user_id == user.id
        goal_names << goal
      end
    end
    goal_names
  end
end
