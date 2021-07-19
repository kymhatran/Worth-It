class Reason < ApplicationRecord
  belongs_to :goal, dependent: :destroy
  validates :description, presence: true
end
