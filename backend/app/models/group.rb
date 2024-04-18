class Group < ApplicationRecord

  has_many :user_groups
  has_many :users, through: :user_groups
  has_many :transactions
  has_many :notifications

  belongs_to :user


end
