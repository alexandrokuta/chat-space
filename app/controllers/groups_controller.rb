class GroupsController < ApplicationController

  def index
    @user = User.find(current_user.id)
  end

  def new
    @group = Group.new
  end

  def create
  end

  def edit
  end

end
