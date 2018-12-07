class Group < ApplicationRecord
  has_many :messages
  has_many :members
  has_many :users,through: :members
  validates :group_name, presence: true
end



