before do
  set_user
end


# Page to register new users
get '/users/new' do
  if request.xhr?
    erb :'users/_register', layout: false
  else
	 erb :'users/new'
  end
end

# Create new user
post '/users' do
  if params[:password_confirmation] == params[:user][:password]
    @user = User.new(params[:user])
    if @user.save
      session[:id] = @user.id
      redirect "/users/#{@user.id}"
    else
      @errors = @user.error.full_messages
      erb :'users/new'
    end
  end
end

# Profile Page
get '/users/:id' do
  @hidden_places = HiddenPlace.joins(:users).where("users.id = ?", @user.id)
  erb :'users/show'
end


private
  def set_user
    if current_user
      @user = User.find(session[:id])
    end
  end
