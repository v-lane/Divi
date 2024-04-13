class Transaction < ApplicationRecord

  belongs_to :group 
  belongs_to :user
  has_many :member_transactions

end
