class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    if user_signed_in?
      redirect_to dashboard_path(current_user)
    end
  end

  def transactions
    @transactions = UpApi.transactions(current_user.api_key)
    @accounts = UpApi.accounts(current_user.api_key)
  end

  # def accounts
  #   @accounts = UpApi.accounts
  # end

  def dashboard
    @goal = Goal.new
    @goal.build_reason
    @goals = Goal.all
  end

  def calculator
  end

  def goal_builder
    @goal = Goal.new
    @goal.build_reason
    @goals = Goal.all
  end
end
