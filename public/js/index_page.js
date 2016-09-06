// This makes sure that the content loads when reloading the page
$(document).ready(function() {
  $('div.tab_content#hidden_spot').show();
  //When somebody clicks on the tab (they are not clicking on the li they are
  // clicking on the a)
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
  })
  // $("#register").load("/users/new #registration_container");
}
