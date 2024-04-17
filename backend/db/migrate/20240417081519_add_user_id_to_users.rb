class AddUserIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :groups, :user_id, :integer
  end
end
