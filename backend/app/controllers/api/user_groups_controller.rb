class Api::UserGroupsController < ApplicationController

  def index
    render json: UserGroup.all
  end
  # GET /user_groups/1
  def show

  end

  # POST /user_groups
  def create
    pp params

    @user_group = UserGroup.new(group_params)

    if @user_group.save
      render json: @user_group, notice: "User Group was successfully created."
    else
      render json: :new, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def group_params
      params.require(:user_group).permit(:user_id, :group_id, :is_owner)
    end
end
