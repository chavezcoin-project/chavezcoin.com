class UsersController < ApplicationController
  def index
    @users = User.allextend Forwardable
  end

  def show
    @user = User.find(params[:id])
    unless current_user.admin?
      redirect_to :back, alert: 'Access denied.' unless @user == current_user
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(secure_params)
      redirect_to users_path, notice: 'User updated.'
    else
      redirect_to users_path, alert: 'Unable to update user.'
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end
end
