class Api::GroupsController < ApplicationController

  # GET /groups/1
  def show
    group=Group.all().joins(:users).where(users: {id: params[:id]})
    render json: group, include: [:users]
  end

  def show_by_group
    group=Group.find(params[:id])
    render json: group, include: [:users, :transactions]

  end

  # POST /groups
  def create
    pp params

    @group = Group.new(group_params)

    if @group.save
      render json: @group, notice: "Group was successfully created."
    else
      render json: :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    # if @group.update(group_params)
    #   redirect_to @group, notice: "Group was successfully updated.", status: :see_other
    # else
    #   render :edit, status: :unprocessable_entity
    # end
  end

  # DELETE /groups/1
  def destroy
    # @group.destroy
    # redirect_to groups_url, notice: "Group was successfully destroyed.", status: :see_other
  end

  private

    # Only allow a list of trusted parameters through.
    def group_params
      params.require(:group).permit(:name, :group_type, :user_id, :is_archived)
    end
end
