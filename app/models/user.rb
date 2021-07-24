class ApiValidator < ActiveModel::Validator
  def validate(record)
    if UpApi.accounts(record.api_key).nil?
      record.errors.add(:api_key, "is wrong fool")
    end
  end
end



class User < ApplicationRecord
  include ActiveModel::Validations
  validates_with ApiValidator
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :goal, dependent: :destroy
  has_one_attached :photo

end


