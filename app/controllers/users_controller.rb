class UsersController < ApplicationController

  def index
  end

  def edit
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.update(user_params) if id = current_user.id
    redirect_to :root
  end

  def search
    users = User.all
    user = users.where.not("name = '#{current_user.name}'")
    @users = user.where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end

end
