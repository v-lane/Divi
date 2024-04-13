class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :group, null: false, foreign_key: true
      t.string :transaction_type
      t.integer :amount
      t.integer :recipient_id
      t.date :transaction_date
      t.boolean :is_deleted
      t.timestamps
    end
  end
end
