class MemberTransaction < ApplicationRecord

  belongs_to :transaction_record, foreign_key: 'transaction_id', class_name: 'Transaction'
end
