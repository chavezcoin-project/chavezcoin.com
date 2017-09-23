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
      @blueButtonLink = new_user_session_path
    else
      @link = ['login', new_user_session_path]
      @blueButtonLink = new_user_session_path
    end
    if @visitor_country['countryCode'] == 'VE' || @visitor_country['countryCode'] == 'MX' || @visitor_country['countryCode'] == 'AR' || @visitor_country['countryCode'] == 'BO' || @visitor_country['countryCode'] == 'CL' || @visitor_country['countryCode'] == 'CO' || @visitor_country['countryCode'] == 'EC' || @visitor_country['countryCode'] == 'ES' || @visitor_country['countryCode'] == 'JM' || @visitor_country['countryCode'] == 'PA' || @visitor_country['countryCode'] == 'PY' || @visitor_country['countryCode'] == 'PE' || @visitor_country['countryCode'] == 'PR' || @visitor_country['countryCode'] == 'DO' || @visitor_country['countryCode'] == 'UY' || @visitor_country['countryCode'] == 'CU'
      @loginForm = File.read("#{Rails.root}/public/login_text.json")
      @loginRedPanel = File.read("#{Rails.root}/public/login_panel_rojo.json")
      @editElements = File.read("#{Rails.root}/public/editElements.json")
      @editRedPanel = File.read("#{Rails.root}/public/editFormRed.json")
      @signupElements = File.read("#{Rails.root}/public/signupElements.json")
      @signupRedPanel = File.read("#{Rails.root}/public/signupRedText.json")
    else
      @loginForm = File.read("#{Rails.root}/public/login_textEnglish.json")
      @loginRedPanel = File.read("#{Rails.root}/public/login_panel_rojoEnglish.json")
      @editElements = File.read("#{Rails.root}/public/editElementsEnglish.json")
      @editRedPanel = File.read("#{Rails.root}/public/editFormRedEnglish.json")
      @signupElements = File.read("#{Rails.root}/public/signupElementsEnglish.json")
      @signupRedPanel = File.read("#{Rails.root}/public/signupRedTextEnglish.json")
    end
  end
end
