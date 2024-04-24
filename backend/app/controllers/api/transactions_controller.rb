class Api::TransactionsController < ApplicationController

  # GET /transactions/1
  def show
    usergroups = UserGroup.where(user_id: params[:id])
    transactions = Transaction.where(group_id: usergroups.pluck(:group_id)).includes(:group, :user).order(transaction_date: :desc)
    render json: transactions.as_json(include: { group: { only: :name }, user: { only: :username }})
  end

  def show_by_id
    transaction = Transaction.includes(:group, :user, :member_transactions).find(params[:id])
  
    transaction.member_transactions.each do |member_transaction|
      recipient_user = User.find(member_transaction.recipient_id)
      member_transaction.recipient_username = recipient_user.username
    end
    
    render json: transaction.as_json(include: {
      group: { only: :name },
      user: { only: :username },
      member_transactions: {}
    })
  end
    
  def show_by_group
    transactions=Transaction.where(group_id: params[:id]).order(created_at: :desc)
    render json: transactions, include: [:group, :user]

  end

  # POST /transactions
  def create
    group = Group.find_by(name: params[:group_name])
    recipient = User.find_by(username: params[:recipient_name])
    transaction_params = {
      user_id: params[:transaction][:user_id],
      group_id: group.id,
      transaction_type: params[:transaction][:transaction_type],
      amount: params[:transaction][:amount],
      recipient_id: recipient.present? ? recipient.id : nil,
      transaction_date: Time.now,
      is_deleted: params[:transaction][:is_deleted]
    }

    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      members = UserGroup.where(group_id: @transaction.group_id).where.not(user_id: @transaction.user_id).pluck(:user_id)
  
      case @transaction.transaction_type
      when 'Expense'
        amount_per_member = @transaction.amount / (members.length + 1)
        members.each do |member|
          MemberTransaction.create!(
            member_transaction_type: @transaction.transaction_type,
            amount: amount_per_member,
            owner_id: @transaction.user_id,
            recipient_id: member,
            group_id: @transaction.group_id,
            transaction_id: @transaction.id
          )
        end
      when 'Payment'
        MemberTransaction.create!(
          member_transaction_type: @transaction.transaction_type,
          amount: @transaction.amount,
          owner_id: @transaction.user_id,
          recipient_id: @transaction.recipient_id,
          group_id: @transaction.group_id,
          transaction_id: @transaction.id
        )
      end
    end
  end

  # PATCH/PUT /transactions/1
  def update
    # if @transaction.update(transaction_params)
    #   redirect_to @transaction, notice: "Transaction was successfully updated.", status: :see_other
    # else
    #   render :edit, status: :unprocessable_entity
    # end
  end

  # DELETE /transactions/1
  def destroy
    # @transaction.destroy
    # redirect_to transactions_url, notice: "Transaction was successfully destroyed.", status: :see_other
  end

  private

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.require(:transaction).permit(:transaction_type, :amount, :transaction_date, :is_deleted, :user_id, :recipient_name, :group_name)
    end
end