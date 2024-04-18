class ChangeForeignKeyOnUsersTable < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :user_groups, :user_id
    add_foreign_key :user_groups, :user_id, on_delete: cascade
  end
end
