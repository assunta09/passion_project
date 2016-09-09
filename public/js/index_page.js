// This makes sure that the content loads when reloading the page
$(document).ready(function() {
  $('div.tab_content#hidden_spot').show();
  //When somebody clicks on the tab (they are not clicking on the li they are
  // clicking on the a)
  $('#home_link').hide();
  clickTab();
  registerInTab();

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
      if (selected === '#register') {
        personalTab();
      }
  })
}

function personalTab() {
  $.ajax({
    url: '/sessions/new',
    method: 'GET'
  }).done(function(result){
      $('#user-container').empty();
      $("#user-container").append(result);
      $('.register_link').show();
      $('.text-container-heading').trigger('reset')
  })
  // $("#register").load("/users/new #registration_container");
}

function registerInTab() {
  $('.register_link').on('click', 'a', function(event) {
    event.preventDefault();
    $('.index_tabs li').removeClass('active');
    $('#display_registration').addClass('active');
    $('.tab_content').hide();
    $('div.tab_content#register').show();
    $.ajax({
      url: '/users/new',
      method: 'GET'
    }).done(function(result){
      $('#user-container').empty();
      $('#user-container').append(result);
      $('.register_link').hide();
      $('.text-container-heading').text("Register and create your own travel-logs");
      console.log(result);
    })
  });
};
