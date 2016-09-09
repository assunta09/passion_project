// Initializ autocomplete
// function initializeAutocomplete(id) {
//   var element = document.getElementById(id);
//   if (element) {
//     var autocomplete = new google.maps.places.Autocomplete(element, { types: [] });
//     google.maps.event.addListener(autocomplete, 'place_changed', getAddress);
//   }
// }

function init() {
  var input = document.getElementById('user_input_autocomplete_address');
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', getAddress);
  }

google.maps.event.addDomListener(window, 'load', init);

var componentForm = {
  street_number: 'short_name',
  street_name: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function getAddress() {
  var place = this.getPlace();
  console.log(addressType);
  // var addressType = place.address_components[2].types[0];
  // console.log(place.address_components[2][componentForm[addressType]]);
  // $('input[name="hidden_place[address]"]').val(place.formatted_address)
  // $('input[name="hidden_place[city]"]').val(place.address_components[1][componentForm[addressType]]);

  //  for (var i = 0; i < place.address_components.length; i++) {
  //   var addressType = place.address_components[i].types[0];
  //   var addressValue = place.address_components[i][componentForm[addressType]]
  //   if (componentForm[addressType]) {
  //     // console.log(place.address_components[i][componentForm[addressType]]);
  //     $('input[name="other['+ addressType +']"]').val(addressValue);
  //   }
  // }
}



// // Event listener starts up upon loading of image
// google.maps.event.addDomListener(window, 'load', function() {
//   initializeAutocomplete('user_input_autocomplete_address');
// });


