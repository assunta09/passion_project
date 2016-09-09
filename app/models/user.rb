class User < ActiveRecord::Base
  include BCrypt

  has_many :user_places
  has_many :hidden_places, through: :user_places

  validates :name, :email, presence: true

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
end
