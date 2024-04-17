class Api::MemberTransactionsController < ApplicationController

  # GET /member_transactions
  def index
    @member_transactions = MemberTransaction.all
  end

  # GET /member_transactions/1
  def show
    user = User.find(params[:id])
    member_transactions = MemberTransaction.where("owner_id = ? OR recipient_id = ?", user.id, user.id)
    render json: member_transactions.as_json
  end

  # GET /member_transactions/new
  def new
    @member_transaction = MemberTransaction.new
  end

  # GET /member_transactions/1/edit
  def edit
  end

  # POST /member_transactions
  def create
    @member_transaction = MemberTransaction.new(member_transaction_params)

    if @member_transaction.save
      redirect_to @member_transaction, notice: "Member transaction was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /member_transactions/1
  def update
    if @member_transaction.update(member_transaction_params)
      redirect_to @member_transaction, notice: "Member transaction was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /member_transactions/1
  def destroy
    @member_transaction.destroy
    redirect_to member_transactions_url, notice: "Member transaction was successfully destroyed.", status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member_transaction
      @member_transaction = MemberTransaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def member_transaction_params
      params.require(:member_transaction).permit(:type, :amount)
    end
end
