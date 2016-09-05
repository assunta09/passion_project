get '/' do
  @hidden_places = HiddenPlace.all
  erb :index
end
