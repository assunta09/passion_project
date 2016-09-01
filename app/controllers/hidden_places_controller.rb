get '/hidden_places/new' do
  if logged_in?
    @categories = Category.all
    erb :'hidden_places/new'
  else
    redirect '/sessions/new'
  end
end


post '/hidden_places' do
  p "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"*4
  p params[:user_input_autocomplete_address]
  @hidden_place = HiddenPlace.new(params[:hidden_place])
  if @hidden_place.save
    @new_entry = UserPlace.create(hidden_place_id: @hidden_place.id, user_id: current_user.id)
    redirect "/users/#{current_user.id}"
  else
    erb :'hidden_places/new'
  end
end
