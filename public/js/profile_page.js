$(document).ready(function() {
  $('div.tab_content#your_places').show();
  //When somebody clicks on the tab (they are not clicking on the li they are
  // clicking on the a)
  $('#profile_link').hide();

  $( "#user_spots" ).on( "ready", "form", function( event ) {
    console.log("Whatever")
  });


  clickTab();
});


function clickTab() {
    $('.index_tabs').on('click', 'a', function(event) {
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

// function init() {
//   var input = document.getElementById('user_input_autocomplete_address');
//   var autocomplete = new google.maps.places.Autocomplete(input);
//   google.maps.event.addListener(autocomplete, 'place_changed', getAddress);
// }


function personalTab() {
  $.ajax({
    url: '/hidden_places/new',
    method: 'GET'
  }).done(function(result){
    // var formDiv = document.getElementById('add_new_place')
    // console.log(formDiv)
    $("#user_spots").empty();
    $("#user_spots").append(result);
    // google.maps.event.addDomListener(formDiv , 'load', init);
  })
}


// window.addEventListener('load',function() {
//   if(document.getElementById('add_spot')) {
//     google.load("maps", {
//       callback:function() {
//         var element = document.getElementById('user_input_autocomplete_address');
//         if (element) {
//           var autocomplete = new google.maps.places.Autocomplete(element, { types: [] });
//           google.maps.event.addListener(autocomplete, 'place_changed');
//         };
//       }
//     });
//   };
// }, false);
