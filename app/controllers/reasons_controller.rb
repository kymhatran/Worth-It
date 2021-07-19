class ReasonsController < ApplicationController
  # def create
  #   @goal = Goal.find(params[:id])
  #   @reason = Reason.new(reason_params)
  #   @reason.goal = @goal
  #   @reason.save
  #   if @reason.save
  #     redirect_to dashboard_path(current_user)
  #   else
  #     render :new
  #   end
  # end

  def destroy
    @reason = Reason.find(params[:id])
    @reason.destroy

    redirect_to dashboard_path(current_user)
  end

  def update
    @reason = Reason.find(params[:id])
    @reason.update(reason_params)

    redirect_to dashboard_path(current_user)
  end

  private

  def reason_params
    params.require(:reason).permit(:description)
  end
end
