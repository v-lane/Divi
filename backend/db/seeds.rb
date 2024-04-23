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

# 10.times do
#   User.create!(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
# end

User.create!(username: 'JennaB', email: 'jenna_bets@example.com', password: 'password')
User.create!(username: 'PixelRunner', email: 'pixelrunner@example.com', password: 'password')
User.create!(username: 'SaraC2024', email: 'saraconnor2024@example.com', password: 'password')
User.create!(username: 'Bookworm_Ben', email: 'ben_reads@example.com', password: 'password')
User.create!(username: 'Ella_the_Engineer', email: 'ella_engineer@example.com', password: 'password')
User.create!(username: 'Mike91', email: 'mike.91@example.com', password: 'password')
User.create!(username: 'TaraT', email: 'tara.ts@example.com', password: 'password')
User.create!(username: 'XxShadowHunterxX', email: 'shadow.hunter@example.com', password: 'password')
User.create!(username: 'LeoLovesCats', email: 'leo-cats@example.com', password: 'password')
User.create!(username: 'Nina_Writer', email: 'nina_writer@example.com', password: 'password')
User.create!(username: 'Fred_Flyer', email: 'fredflyer@example.com', password: 'password')


puts 'Users Created'

## Groups
puts 'Creating Groups'

# Group.create!(name: Faker::Games::Dota.team, group_type: 'Household', user_id: 1, is_archived: false)
# Group.create!(name: Faker::Games::Dota.team, group_type: 'Trip', user_id: 2, is_archived: false)
# Group.create!(name: Faker::Games::Dota.team, group_type: 'Household', user_id: 3, is_archived: false)

Group.create!(name: 'Fantastic Four', group_type: 'Household', user_id: 1, is_archived: false, created_at: Faker::Date.between( from: '2024-03-01', to: '2024-03-30' ))
Group.create!(name: 'Europe 2024!', group_type: 'Trip', user_id: 2, is_archived: false, created_at: Faker::Date.between( from: '2024-03-01', to: '2024-03-30' ))
Group.create!(name: 'Tuesday is Ladies Night', group_type: 'Personal', user_id: 3, is_archived: false, created_at: Faker::Date.between( from: '2024-03-01', to: '2024-03-30' ))


puts 'Groups Created'

## User Groups
puts 'Creating UserGroups'

users = User.all
groups = Group.all

UserGroup.create!(user_id: users[0].id, group_id: groups[0].id, is_owner: true)
UserGroup.create!(user_id: users[1].id, group_id: groups[1].id, is_owner: true)
UserGroup.create!(user_id: users[2].id, group_id: groups[2].id, is_owner: true)
UserGroup.create!(user_id: users[3].id, group_id: groups[0].id, is_owner: false)
UserGroup.create!(user_id: users[5].id, group_id: groups[2].id, is_owner: false)
UserGroup.create!(user_id: users[9].id, group_id: groups[0].id, is_owner: false)
UserGroup.create!(user_id: users[0].id, group_id: groups[1].id, is_owner: false)
UserGroup.create!(user_id: users[0].id, group_id: groups[2].id, is_owner: false)

puts 'UserGroups Created'

## Transactions
puts 'Creating Transactions'

Transaction.create!(group_id: groups[0].id, transaction_type: 'Expense', amount: 150, user_id: users[0].id, transaction_date: Faker::Date.between( from: '2024-04-01', to: '2024-04-02' ), is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Expense', amount: 320, user_id: users[3].id, transaction_date: Faker::Date.between( from: '2024-04-03', to: '2024-04-06' ) , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Payment', amount: 40, user_id: users[9].id, recipient_id: users[0].id, transaction_date: Faker::Date.between( from: '2024-04-06', to: '2024-04-08' ) , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Expense', amount: 100, user_id: users[9].id, transaction_date: Faker::Date.between( from: '2024-04-06', to: '2024-04-08' ) , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Payment', amount: 50, user_id: users[9].id, recipient_id: users[0].id, transaction_date: Faker::Date.between( from: '2024-04-10', to: '2024-04-15' ) , is_deleted: false)
Transaction.create!(group_id: groups[0].id, transaction_type: 'Payment', amount: 30, user_id: users[9].id, recipient_id: users[3].id, transaction_date: Faker::Date.between( from: '2024-04-15', to: '2024-04-17' ) , is_deleted: false)


Transaction.create!(group_id: groups[1].id, transaction_type: 'Expense', amount: 180, user_id: users[1].id, transaction_date: Faker::Date.between( from: '2024-04-01', to: '2024-04-15' ) , is_deleted: false)
Transaction.create!(group_id: groups[1].id, transaction_type: 'Expense', amount: 225, user_id: users[0].id, transaction_date: Faker::Date.between( from: '2024-04-01', to: '2024-04-15' ) , is_deleted: false)
Transaction.create!(group_id: groups[2].id, transaction_type: 'Expense', amount: 385, user_id: users[5].id, transaction_date: Faker::Date.between( from: '2024-04-01', to: '2024-04-15' ) , is_deleted: false)
Transaction.create!(group_id: groups[2].id, transaction_type: 'Expense', amount: 190, user_id: users[2].id, transaction_date: Faker::Date.between( from: '2024-04-01', to: '2024-04-15' ) , is_deleted: false)

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

Notification.create!(user_id: users[0].id, group_id: groups[0].id, notification_type: "new_group", is_read: false, is_archived: true, created_at: Faker::Date.between( from: '2024-03-01', to: '2024-03-30' ))
Notification.create!(user_id: users[0].id, group_id: groups[2].id, notification_type: "new_group", is_read: false, is_archived: false, created_at: Faker::Date.between( from: '2024-03-01', to: '2024-03-30' ))
Notification.create!(user_id: users[0].id, group_id: groups[1].id, notification_type: "new_group", is_read: false, is_archived: false, created_at: Faker::Date.between( from: '2024-03-01', to: '2024-03-30' ))
Notification.create!(user_id: users[0].id, group_id: groups[1].id, notification_type: "new_group_member", is_read: false, is_archived: true, created_at: Faker::Date.between( from: '2024-04-01', to: '2024-04-02' ))
Notification.create!(user_id: users[0].id, group_id: groups[1].id, notification_type: "new_group_member", is_read: false, is_archived: true, created_at: Faker::Date.between( from: '2024-04-01', to: '2024-04-02' ))
Notification.create!(user_id: users[0].id, group_id: groups[1].id, notification_type: "new_group_member", is_read: false, is_archived: true, created_at: Faker::Date.between( from: '2024-04-01', to: '2024-04-02' ))
Notification.create!(user_id: users[0].id, group_id: groups[1].id, notification_type: "new_transaction", is_read: false, is_archived: false, created_at: Faker::Date.between( from: '2024-04-02', to: '2024-04-04' ))
Notification.create!(user_id: users[0].id, group_id: groups[1].id, notification_type: "new_transaction", is_read: false, is_archived: false, created_at: Faker::Date.between( from: '2024-04-05', to: '2024-04-09' ))
Notification.create!(user_id: users[0].id, group_id: groups[2].id, notification_type: "new_group_member", is_read: false, is_archived: true, created_at: Faker::Date.between(from: '2024-04-01', to: '2024-04-02' ))

puts 'Notifications Created'

puts'... Seeding Completed!'