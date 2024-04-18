class ChangeForeignKeyOnUsersTable < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :user_groups, :users
    add_foreign_key :user_groups, :users, on_delete: :cascade
  end
end
