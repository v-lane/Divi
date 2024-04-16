# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

UserGroup.destroy_all
MemberTransaction.destroy_all
Transaction.destroy_all
Notification.destroy_all
User.destroy_all
Group.destroy_all

puts 'Seeding Data...'

unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

## Users
puts 'Creating Users'

10.times do
  User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
end

puts 'Users Created'

## Groups
puts 'Creating Groups'

Group.create!(name: Faker::Games::Dota.team, group_type: 'Household', is_archived: false)
Group.create!(name: Faker::Games::Dota.team, group_type: 'Trip', is_archived: false)
Group.create!(name: Faker::Games::Dota.team, group_type: 'Household', is_archived: false)

puts 'Groups Created'

## User Groups
puts 'Creating UserGroups'

users = User.all
groups = Group.all

UserGroup.create!(user_id: users[0].id, group_id: groups[0].id, is_owner: true)
UserGroup.create!(user_id: users[1].id, group_id: groups[1].id, is_owner: true)
UserGroup.create!(user_id: users[2].id, group_id: groups[2].id, is_owner: true)
UserGroup.create!(user_id: users[3].id, group_id: groups[0].id, is_owner: false)
UserGroup.create!(user_id: users[4].id, group_id: groups[1].id, is_owner: false)
UserGroup.create!(user_id: users[5].id, group_id: groups[2].id, is_owner: false)
UserGroup.create!(user_id: users[6].id, group_id: groups[0].id, is_owner: false)
UserGroup.create!(user_id: users[7].id, group_id: groups[1].id, is_owner: false)
UserGroup.create!(user_id: users[8].id, group_id: groups[2].id, is_owner: false)
UserGroup.create!(user_id: users[9].id, group_id: groups[0].id, is_owner: false)
UserGroup.create!(user_id: users[9].id, group_id: groups[1].id, is_owner: false)

puts 'UserGroups Created'

## Transactions
puts 'Creating Transactions'

Transaction.create!(group_id: groups[0].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[0].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[1].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[1].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[2].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[2].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[0].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[1].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[1].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[2].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[2].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Expense', amount: Faker::Number.number(digits: 3), user_id: users[0].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Payment', amount: Faker::Number.number(digits: 3), user_id: users[0].id, recipient_id: users[3].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Payment', amount: Faker::Number.number(digits: 3), user_id: users[0].id, recipient_id: users[6].id, transaction_date: Date.new , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Payment', amount: Faker::Number.number(digits: 3), user_id: users[0].id, recipient_id: users[9].id, transaction_date: Date.new , is_deleted: false)

puts 'Transactions Created'

## Member Transactions
puts 'Creating Member Transactions'

transactions = Transaction.all

transactions.each do |transaction|
  if transaction.transaction_type == 'Expense'
    members = []
    user_groups = UserGroup.where(group_id: transaction.group_id)
    user_groups.each do |user_group|
      if transaction.user_id != user_group.user_id
        members.push(user_group.user_id)
      end
    end
    members.each do |member|
      MemberTransaction.create!(member_transaction_type: transaction.transaction_type, amount: transaction.amount / (members.length + 1), owner_id: transaction.user_id, recipient_id: member, group_id: transaction.group_id, transaction_id: transaction.id)
    end
  elsif transaction.transaction_type == 'Payment'
    MemberTransaction.create!(member_transaction_type: transaction.transaction_type, amount: transaction.amount, owner_id: transaction.user_id, recipient_id: transaction.recipient_id, group_id: transaction.group_id, transaction_id: transaction.id)
  end
end

puts 'Member Transactions Created'

## Notifications
puts 'Creating Notifications'

Notification.create!(user_id: users[0].id, group_id: groups[0].id, notification_type: "new_group", is_read: false, is_archived: false)
Notification.create!(user_id: users[1].id, group_id: groups[1].id, notification_type: "new_group", is_read: false, is_archived: false)
Notification.create!(user_id: users[2].id, group_id: groups[2].id, notification_type: "new_group", is_read: false, is_archived: false)
Notification.create!(user_id: users[0].id, group_id: groups[0].id, notification_type: "new_group_member", is_read: false, is_archived: false)
Notification.create!(user_id: users[1].id, group_id: groups[1].id, notification_type: "new_group_member", is_read: false, is_archived: false)
Notification.create!(user_id: users[2].id, group_id: groups[2].id, notification_type: "new_group_member", is_read: false, is_archived: false)
Notification.create!(user_id: users[0].id, group_id: groups[0].id, notification_type: "archived_group", is_read: false, is_archived: false)
Notification.create!(user_id: users[1].id, group_id: groups[1].id, notification_type: "new_transaction", is_read: false, is_archived: false)
Notification.create!(user_id: users[2].id, group_id: groups[2].id, notification_type: "updated_transaction", is_read: false, is_archived: false)
Notification.create!(user_id: users[0].id, group_id: groups[0].id, notification_type: "deleted_transaction", is_read: false, is_archived: false)

puts 'Notifications Created'

puts'... Seeding Completed!'