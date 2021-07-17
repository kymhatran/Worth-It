class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def transactions
  end

  def dashboard
    @goal = Goal.new
  end
end
