class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :group_type
      t.boolean :is_archived

      t.timestamps
    end
  end
end
