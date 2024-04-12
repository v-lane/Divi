class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.string :type
      t.boolean :is_read
      t.boolean :is_archived

      t.timestamps
    end
  end
end
