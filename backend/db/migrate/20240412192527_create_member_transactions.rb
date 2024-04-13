class CreateMemberTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :member_transactions do |t|
      t.references :transaction, null: false, foreign_key: true
      t.string :member_transaction_type
      t.integer :amount
      t.integer :owner_id
      t.integer :recipient_id
      t.integer :group_id
      t.integer :member_id

      t.timestamps
    end
  end
end
