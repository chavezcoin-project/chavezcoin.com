class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def remote_ip
    if request.remote_ip == '127.0.0.1'
      # Hard coded remote address
      '208.80.152.201'
    else
      request.remote_ip
    end

  def authenticate_admin_user!
    redirect_to root_path , notice: 'Access Denied.' unless current_user.admin?
  end
end
