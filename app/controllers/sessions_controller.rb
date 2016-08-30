get '/sessions/new' do
  erb :'session/new'
end


post '/sessions' do
  @user = User.find_by_email(params[:user][:email])
  if @user && @user.password == params[:user][:password]
    session[:id] == @user.id
    redirect "/users/#{@user.id}"
  else
      @errors = ["Email and/or Password not found"]
      erb :'sessions/new'
  end
end


# Logout from session
delete '/sessions' do
  session[:id] = nil
  redirect '/'
end
