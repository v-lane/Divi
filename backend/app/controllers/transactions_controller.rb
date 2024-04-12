class TransactionsController < ApplicationController

  # GET /transactions/1
  def show
  end

  # POST /transactions
  def create
    # @transaction = Transaction.new(transaction_params)

    # if @transaction.save
    #   redirect_to @transaction, notice: "Transaction was successfully created."
    # else
    #   render :new, status: :unprocessable_entity
    # end
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
      params.require(:transaction).permit(:type, :amount, :transaction_date, :is_deleted)
    end
end
