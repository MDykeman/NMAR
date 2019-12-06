$(function(){

// Move Search to Top Search Bar
    $('#searchColumn').insertBefore('#MPAuxNav');

    // reset placeholder text 
    $('#searchColumn input').attr('placeholder', 'Search here...');

    $('ul.nav li:last-child a.dropdown-toggle').wrapInner('<span class="button-highlight"></span>');

    if($('.navbar-toggle').is(":visible") === true) {
      $('#searchColumn').insertBefore('ul.nav.navbar-nav');
    }

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
          arrows: false,
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

      $('.HLMyDocuments ul li').wrapAll('<div class="resource-slider" />');
      $('.top-resources .HLMyDocuments').wrap('<div class="row-wide" />');
      var resourceImgSrc = $('.top-resource-img img').attr("src");
      $('.top-resources').css('background-image', 'url("' + resourceImgSrc + '")');
      $('.resource-slider').slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 15000,
          prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-chevron-right"></i></button>',
          centerMode: true,
          centerPadding: '15px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                dots: true,
                variableWidth: false,
                centerMode: true,
                centerPadding: "10px",
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1072,
              settings: {
                arrows: false,
                dots: true,
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

      handleTopTiles();
      eventThumbnails();
      handleResourceTile();
      featuredPhoto();
      discussions();
      footerFormatting();
      becomeMember();
      handleInnerPageTitle();
});

$(window).resize(function () {
  if($('.navbar-toggle').is(":visible") === true) {
    $('#searchColumn').insertBefore('ul.nav.navbar-nav');
  }
  else if ($('.navbar-toggle').is(":visible") === false)  {
    $('#searchColumn').insertBefore('#MPAuxNav');
  }
});

$('#searchColumn input.form-control').on('click', function(){
    $(window).off('resize');
  });


// Functions 

function handleTopTiles() {

    $('.top-tile').wrapAll('<div class="flex-wrap tile-wrap"/>');
    $('.home .flex-wrap').wrap('<div class="row-wide"/>');

    $('.top-tile').each(function() {
        var tileAnchor = $(this).find('a').attr('href');
        $(this).wrap('<a href="' + tileAnchor + '"></a>')
    });
}

function eventThumbnails() {
    $('.HLEventList ul li').each(function () {
        var self = $(this),
            month = $(self).find('.date-block .calendar-month span').text();
        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);
        var dateBlock = $(self).find('.date-block');
        var monthBlock = $(self).find('.date-block .calendar-month');
        $(dateBlock).prepend($(monthBlock));
        var calendarLocation = $(self).find('.title-row .col-md-10 .col-md-12 p[id*="CalendarLocation"]');
        console.log(calendarLocation);
        var locationText = $(calendarLocation).text().trim();
        console.log(locationText);
         var locationTrimmed = locationText.substring(0, 31);
        $(calendarLocation).html(locationTrimmed);
        var eventType = $(self).find('.title-row h4');
        var titleContainer = $(self).find('.title-row .col-md-12');
        $(titleContainer).prepend($(eventType));
    });
    $('.HLEventList .heading .col-md-12').append($('.add-event-button'));
}

 function handleResourceTile() {
  $('.top-resources .slick-slide').each(function(){

    var byline = $(this).find('.ByLine');
    $(this).prepend(byline);
    var postedIn = $(this).find('.content-row');
    $(this).append(postedIn);

  });
}

function featuredPhoto() {
  $('.featured-photo img').hide();
  var href = $('.featured-photo a').attr('href');
  $('.featured-photo').wrap('<a class="featured-photo-anchor" href="' + href + '"></a>');
  $('.featured-photo .HtmlContent').prepend('<div class="img-container"></div>');
  var featuredPhoto = $('.featured-photo img').attr('src');
  console.log(featuredPhoto);
  $('.featured-photo .img-container').css('background-image', 'url("' + featuredPhoto + '")' );
}

function discussions() {
  $('.recent-discussions ul li ').each(function() {
     var postedTo = $(this).find('h5');
     var byline = $(this).find('.ByLine');
     var desc = $(this).find('div[id*="Description"]');
     var titleRow = $(this).find('.title-row > div[id*="pnlTitle"]');
     $(this).append(byline);
     $(this).append(postedTo);
     $(titleRow).append(desc);
  });
}

function footerFormatting() {
  $('#FOOTER .top-row, #FOOTER .bottom-row').wrapAll('<div class="col-md-8" />');
  $('#FOOTER .bottom-row').wrapAll('<div class="row" />');
  var footerWaterMarkSrc = $('.footer-logo img').attr('src');
  $('#FOOTER').css('background-image', 'url("' + footerWaterMarkSrc + '")');
}

function becomeMember() {
  $('.member-cta').wrapInner('<div class="row-wide row"/>');
  $('.member-cta h3, .member-cta h2, .member-cta p').wrapAll('<div class="col-md-7"/>');
  var memberImgSrc = $('.member-cta img').attr('src');
  $('.member-cta img').hide();
  $('.member-cta > .row-wide .HtmlContent').append('<div class="col-md-5"><div class="img-container"/></div>');
  $('.member-cta .img-container').css('background-image', 'url("' + memberImgSrc + '")');
}

function handleInnerPageTitle() {
  $('.interior h1').wrap('<div class="interior-header"/>');
  var interiorHeaderBGSrc = $('.interior-header-bg img').attr('src');
  $('.interior-header').css('background-image', 'url("'+ interiorHeaderBGSrc + '")');
  $('.interior-header').append($('.BreadCrumb'));
}