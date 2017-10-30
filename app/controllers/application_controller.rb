class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :set_variables
  before_filter :set_locale
  protect_from_forgery with: :exception
 
  private
    def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def authenticate_admin_user!
    redirect_to root_path , notice: 'Access Denied.' unless current_user.admin?
  end

  def set_variables
    if user_signed_in?
      @link = ['logout', destroy_user_session_path]
      @blueButtonLink = new_user_session_path
    else
      @link = ['login', new_user_session_path]
      @blueButtonLink = new_user_session_path
    end
    
    @loginForm = File.read("#{Rails.root}/public/login_text.json")
    @loginRedPanel = File.read("#{Rails.root}/public/login_panel_rojo.json")
    @editElements = File.read("#{Rails.root}/public/editElements.json")
    @editRedPanel = File.read("#{Rails.root}/public/editFormRed.json")
    @signupElements = File.read("#{Rails.root}/public/signupElements.json")
    @signupRedPanel = File.read("#{Rails.root}/public/signupRedText.json")
  end
end
