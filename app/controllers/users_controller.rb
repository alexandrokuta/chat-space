class UsersController < ApplicationController

  def index
  end

  def edit
  end

  def update
    @user = User.update(user_params) if id = current_user.id
    redirect_to :root
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end

end
