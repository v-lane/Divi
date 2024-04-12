class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :type
      t.integer :amount
      t.date :transaction_date
      t.boolean :is_deleted

      t.timestamps
    end
  end
end
