get '/hidden_places/new' do
  if logged_in?
    @categories = Category.all
    if request.xhr?
      erb :'hidden_places/_add_place', layout: false
    else
      erb :'hidden_places/new'
    end
  else
    redirect '/sessions/new'
  end
end


post '/hidden_places' do
  country = Country.where(country_name: (params[:location][:location_name].split(', ').last)).first
  location_info = params[:location][:location_name].split(', ')
  location_info.pop
  @hidden_place = current_user.hidden_places.new(params[:hidden_place])
  location = country.locations.new(location_name: location_info.join(', '))
  @hidden_place.location = location
  if @hidden_place.save
    new_entry = UserPlace.create(hidden_place_id: @hidden_place.id, user_id: current_user.id)
    redirect "/users/#{current_user.id}"
  else
    erb :'hidden_places/new'
  end
end





















































