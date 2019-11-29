$(function(){

// Move Search to Top Search Bar
    $('#searchColumn').insertBefore('#MPAuxNav');

// Main Slider


          // general
          $('.slide').each(function () {
            var self = $(this);
          var bgImg = $(self).find('.HtmlContent img'),
              imgSrc = "url('" + bgImg.attr('src') + "')";
          $(this).css('background-image', imgSrc);
          bgImg.hide();
      });
      
      setTimeout(function(){
        var headerHeight = $('#MPOuterHeader').css('height');
        $('#MPOuter').css('padding-top', headerHeight);
       },500);

      $('.slide').wrapAll('<div class="slider slick-dotted" />');
      $('.slider').slick({
          dots: true,
          arrows: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 15000,
          prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-arrow-forward"></i></button>',
          nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-arrow-back"></i></button>',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                variableWidth: false,
                centerMode: true,
                centerPadding: "10px",
                slidesToShow: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                variableWidth: false,
                centerMode: true,
                centerPadding: "10px",
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                variableWidth: false,
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 1
              }
            }
          ]
      });

});

$('#searchColumn input.form-control').on('click', function(){
    $(window).off('resize');
  });