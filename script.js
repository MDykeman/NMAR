$(function(){

// Move Search to Top Search Bar
    $('#searchColumn').insertBefore('#MPAuxNav');

});

$('#searchColumn input.form-control').on('click', function(){
    $(window).off('resize');
  });