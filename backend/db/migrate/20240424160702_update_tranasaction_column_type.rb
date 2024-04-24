class UpdateTranasactionColumnType < ActiveRecord::Migration[7.0]
  def change
    reversible do |direction|
      change_table :transactions do |t|
        direction.up {t.change :transaction_date, :datetime}
        direction.down {t.change :transaction_date, :date}
      end
    end
  end
end
