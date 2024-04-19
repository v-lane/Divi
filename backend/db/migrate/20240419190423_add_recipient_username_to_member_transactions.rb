class AddRecipientUsernameToMemberTransactions < ActiveRecord::Migration[7.0]
  def change
    add_column :member_transactions, :recipient_username, :string
  end
end
