var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};


// Initializ autocomplete
function initializeAutocomplete(id) {
  var element = document.getElementById(id);
  if (element) {
    var autocomplete = new google.maps.places.Autocomplete(element, { types: [] });
    google.maps.event.addListener(autocomplete, 'place_changed', getAddress);
  }
}

function getAddress() {
  var place = this.getPlace();
  console.log(place);
  // for (var component in componentForm) {
  //   document.getElementById(component).value = '';
  //   document.getElementById(component).disabled = false;
  // }
}



// function onPlaceChanged() {
//   var place = this.getPlace();
//   console.log(place);  // Uncomment this line to view the full object returned by Google API.

//   // for (var i in place.address_components) {
//   //   var component = place.address_components[i];
//   //   for (var j in component.types) {  // Some types are ["country", "political"]
//   //     var type_element = document.getElementById(component.types[j]);
//   //     if (type_element) {
//   //       type_element.value = component.long_name;
//   //     }
//   //   }
//   // }
// }


// Event listener starts up upon loading of image
google.maps.event.addDomListener(window, 'load', function() {
  initializeAutocomplete('user_input_autocomplete_address');
});


