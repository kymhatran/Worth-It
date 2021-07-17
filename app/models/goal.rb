class Goal < ApplicationRecord
  belongs_to :user
  has_many :reasons

  validates :name, :due_date, :amount, presence: true
end
