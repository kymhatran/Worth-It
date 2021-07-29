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
    no_weeks = (((Date.parse(goal.due_date)-Date.parse(date_today)).to_i) / 7).floor
    if no_weeks < 1
      no_weeks = 1
    end
    percentage = percentage_of_goal_amount(value, goal)
    [((goal.amount - value.to_i) / no_weeks), percentage]
  end
  def percentage_of_goal_amount(value, goal)
    ((value.to_f / goal.amount) * 100).round
  end
end
