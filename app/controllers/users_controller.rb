class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def edit
    @user = User.find(params[:id])
  end

  def destroy
    @user_update = User.find(params[:id])
    if @user_update.present?
      @user_update.destroy
    end

    respond_to do |format|
      format.html {redirect_to users_path, notice: 'User was successfully destroyed.'}
      format.json {render :index}
    end
  end

  def update
    @user = User.find(params[:id])

    respond_to do |format|
      if @user.update_without_password(user_params)
        format.html {redirect_to users_path, notice: 'User was successfully updated.'}
        format.json {render :index, status: :created, location: @user}
      else
        redirect_to edit_user_path(@user)
      end
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :address, :city, :state, :zip)
  end

end
