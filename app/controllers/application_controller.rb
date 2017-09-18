class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :set_variables
  protect_from_forgery with: :exception
  def remote_ip
    if request.remote_ip == '127.0.0.1'
      '190.73.104.18'
    else
      request.remote_ip
    end
  end

  def authenticate_admin_user!
    redirect_to root_path , notice: 'Access Denied.' unless current_user.admin?
  end

  def set_variables
    @ip = remote_ip()
    @visitor_country = HTTParty.get('http://ip-api.com/json/' + @ip)
    puts @visitor_country.body, @visitor_country.code, @visitor_country.message, @visitor_country.headers.inspect

    if user_signed_in?
      @link = ['logout', destroy_user_session_path]
    else
      @link = ['login', new_user_session_path]
    end
  end
end
