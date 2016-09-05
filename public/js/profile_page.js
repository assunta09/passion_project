$(document).ready(function() {
  $('div.tab_content#your_places').show();
  //When somebody clicks on the tab (they are not clicking on the li they are
  // clicking on the a)
  clickTab();
});


function clickTab() {
    $('.index_tabs a').click(function(event) {
    // we delete the active class from all li tags
      $('.index_tabs li').removeClass('active');
      // then we access the parent of the a tag that was clicked on
      // and give it the class 'active'
      $(this).parent().addClass('active');

      var selected = $(this).attr('href');
      $('.tab_content').hide();
      $('div.tab_content' + selected).show();
      if (selected === '#add_spot') {
        personalTab();
      }
  })
}

function personalTab() {
  $.ajax({
    url: '/hidden_places/new',
    method: 'GET'
  }).done(function(result){
    console.log(result);
    $(".tab_content").append(result);
    // FIXIT: appending several times!!
  })
  // $("#register").load("/users/new #registration_container");
}

///
// window.addEventListener('load',function(){
//   if(document.getElementById('user_input_autocomplete_address')){
//     initializeAutocomplete('user_input_autocomplete_address');
//   }
// },false);


// // google.maps.event.addDomListener(window, 'load', function() {
// //   initializeAutocomplete('user_input_autocomplete_address');
// // });

// function initializeAutocomplete(id) {
//   var element = document.getElementById(id);
//   if (element) {
//     var autocomplete = new google.maps.places.Autocomplete(element, { types: [] });
//     google.maps.event.addListener(autocomplete, 'place_changed', getAddress);
//   }
// }
