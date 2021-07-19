class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def transactions
    @transactions = UpApi.transactions
    @accounts = UpApi.accounts
  end

  # def accounts
  #   @accounts = UpApi.accounts
  # end

  def dashboard
    @goal = Goal.new
    @goal.build_reason
    @goals = Goal.all
  end
end
