class ReferralsController < ApplicationController
  before_action :authenticate_user!, only: [:index]

  def index
    @user_referrals = current_user.referrals
  end
end
