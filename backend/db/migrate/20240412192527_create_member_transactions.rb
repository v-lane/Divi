class CreateMemberTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :member_transactions do |t|
      t.string :type
      t.integer :amount

      t.timestamps
    end
  end
end
