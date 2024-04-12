class User < ApplicationRecord

  has_many :transactions
  has_many :notifications
  has many :user_groups
  has_many :groups, through: :user_groups
  
end
