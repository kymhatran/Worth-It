module ContributionHelper
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
  def weekly_contributions(goal, user)
    value = account_balance(goal, user)
    date_today = Time.now.strftime("%d/%m/%Y")
    no_weeks = num_weeks(goal.due_date)
    percentage = percentage_of_goal_amount(value, goal.amount)
    [((goal.amount - value.to_i) / no_weeks), percentage, value]
  end

  def percentage_of_goal_amount(value, goal)
    ((value.to_f / goal) * 100).round
  end

  def num_weeks(goal)
    date_today = Time.now.strftime("%d/%m/%Y")
    no_weeks = (((Date.parse(goal)-Date.parse(date_today)).to_i) / 7).floor
    if no_weeks < 1
      no_weeks = 1
    end
    no_weeks
  end

  def created_to_end_date(created, end_date)
    created_date = created.in_time_zone("Australia/Melbourne").strftime("%d/%m/%Y")
    (((Date.parse(end_date)-Date.parse(created_date)).to_i) / 7).floor
  end
end
