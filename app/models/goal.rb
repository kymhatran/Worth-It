class Goal < ApplicationRecord
  belongs_to :user
  has_one :reason
  accepts_nested_attributes_for :reason
  validates :name, :due_date, :amount, presence: true
end
