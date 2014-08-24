$(document).ready(function(){
  $('ul.nav').click(function(){
    $(this).closest('.navbar-collapse')
      .removeClass('in')
      .addClass('out');
  });
});
