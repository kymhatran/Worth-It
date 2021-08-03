module ContributionHelper

  # Gets the paticular savings account for current user and retrieves the balance
  def account_balance(goal, user)
    value = 0
    date = ""
    accounts = UpApi.accounts(user)
    accounts.each do |account|
      if account[1][:display_name] == goal.name
        value = account[1][:value]
      end
    end
    value
  end

  # A method to figure out the weekly contributions of each goal, also added percentage
  # for doing the progress bar
  def weekly_contributions(goal, user)
    value = account_balance(goal, user)
    date_today = Time.now.strftime("%d/%m/%Y")
    no_weeks = num_weeks(goal.due_date)
    percentage = percentage_of_goal_amount(value, goal.amount)
    [((goal.amount - value.to_i) / no_weeks), percentage, value]
  end

  # Find what percentage of the goal you've saved
  def percentage_of_goal_amount(value, goal)
    ((value.to_f / goal) * 100).round
  end

  # Number of weeks from today till end of goal
  def num_weeks(goal)
    date_today = Time.now.strftime("%d/%m/%Y")
    no_weeks = (((Date.parse(goal)-Date.parse(date_today)).to_i) / 7).floor
    if no_weeks < 1
      no_weeks = 1
    end
    no_weeks
  end

  # Number of days from creation of goal to end of goal
  def created_to_end_date(created, end_date)
    created_date = created.in_time_zone("Australia/Melbourne").strftime("%d/%m/%Y")
    # (((Date.parse(end_date)-Date.parse(created_date)).to_i) / 7).floor
    ((Date.parse(end_date)-Date.parse(created_date)).to_i)
  end

  # Number of days from today till end of goal
  def num_days(goal)
    date_today = Time.now.strftime("%d/%m/%Y")
    no_weeks = ((Date.parse(goal)-Date.parse(date_today)).to_i)
  end
end

