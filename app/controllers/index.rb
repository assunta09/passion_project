get '/' do
  @hidden_places = HiddenPlace.all
  if current_user
    @user = User.find(session[:id])
    @hidden_places_user = HiddenPlace.joins(:users).where("users.id = ?", @user.id)
  end
  erb :index
end
