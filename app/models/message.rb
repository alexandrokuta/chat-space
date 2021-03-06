class Message < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  belongs_to :group
  validates :text,presence: true, unless: 'image.present?'
end
