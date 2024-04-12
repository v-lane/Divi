class NotificationsController < ApplicationController

  # GET /notifications/1
  def show
  end

  # POST /notifications
  def create
    # @notification = Notification.new(notification_params)

    # if @notification.save
    #   redirect_to @notification, notice: "Notification was successfully created."
    # else
    #   render :new, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /notifications/1
  def update
    # if @notification.update(notification_params)
    #   redirect_to @notification, notice: "Notification was successfully updated.", status: :see_other
    # else
    #   render :edit, status: :unprocessable_entity
    # end
  end

  # DELETE /notifications/1
  def destroy
    # @notification.destroy
    # redirect_to notifications_url, notice: "Notification was successfully destroyed.", status: :see_other
  end

  private
    # Only allow a list of trusted parameters through.
    def notification_params
      params.require(:notification).permit(:type, :is_read, :is_archived)
    end
end
