class RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_user!, only: [:overview]

  def overview

  end

  def new
    cookies[:referral] = params[:referral]
    super
  end

  def create
    referral_user = User.find_by(referrer_key: cookies[:referral])

    if referral_user.present?
      @user = User.new(sign_up_params)

      if @user.save
        Referral.create(user: @user, referred_by: referral_user.id)
        ReferralAttribution.create(user: @user, from: cookies[:referral])
        cookies.delete :referral
        sign_in(@user)

        redirect_to account_overview_path, notice: "Yahoo usuario creado exitosamente y referido por #{referral_user.email}"
      else
        redirect_to new_user_registration_path, error: @user.errors.full_messages
      end
    else
      @user = User.new(sign_up_params)

      if @user.save
        sign_in(@user)

        redirect_to account_overview_path, notice: "Usuario creado exitosamente"
      else
        redirect_to new_user_registration_path, error: @user.errors.full_messages
      end
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  def sign_up_params
    params.require(:user).permit(
      :email,
      :password,
      :password_confirmation,
    )
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(_resource)
  #   redirect_to account_overview_path, notice: "Usuario creado exitosamente"
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
