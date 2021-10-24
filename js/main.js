$(function(){

  AOS.init();

    //flatpickr
    flatpickr('.flatpickr', {
      dateFormat: 'Y-m-d',
      defaultDate: 'today',
      minDate: 'today',
      mode: 'range',
    });

  //fixedHeader
  function fixedHeader() {
    let scroll = $(this).scrollTop();
    if(scroll < 30){
      $('#header').removeClass('fixed');
    } else {
      $('#header').addClass('fixed');
    };
  };

  $(window).on('scroll',function(){
    fixedHeader();
  });

  fixedHeader();
  

  //hamburger
  $('.burger-btn').on('click',function(){
    $('body').toggleClass('is-active');
    // $('html,body').toggleClass('no-scroll')
    if($(this).attr('aria-expanded') == 'false'){
      $(this).attr('aria-expanded','true');
      $('.sp-menu-wrapper a').css('color','#fff');
      $('.sp-menu-wrapper').css('visibility','visible');
      $('.sp-menu-wrapper').attr('aria-hidden','false');
    } else {
      $(this).attr('aria-expanded','false');
      $('.sp-menu-wrapper a').css('color','');
      $('.sp-menu-wrapper').css('visibility','hidden');
      $('.sp-menu-wrapper').attr('aria-hidden','true');
    };
  });

  //news-tabs
  $('.js-tab-trigger').on('click', function(){
    $('.js-tab-trigger').removeClass('is-active');
    $('.js-tab-target').removeClass('is-active');
    $(this).addClass('is-active');
    let id = $(this).data('id');
    $(`#${id}`).addClass('is-active');
  });


  //modal
  $('.check-btn').on('click',function(){
    $('.modal-area').css('visibility','visible');
  });

  $('.close-btn').on('click', function(){
    $('.modal-area').css('visibility','hidden');
  });

});
