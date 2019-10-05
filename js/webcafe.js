$(window).resize(function(){
  location.reload();
});
let viewport = window.matchMedia('(max-width:999px)');
if(viewport.matches){
  let nav = $('.navigation');
  let btn = $('.btn-menubar');
  let menu = $('.menu');
  let li = $('.menu-list');
  let span = $('.menu-item');
  
  li.attr('tabindex', '0');
  span.attr('role', 'button');
  span.attr('aria-haspopup', 'true');
  span.attr('aria-expanded', 'false');
  span.addClass('icon-plus');

  btn.on('click', function(e) {
    // 혹시 a 요소를 사용했을 때를 대비하여 a 요소의 기본 이벤트 취소
    e.preventDefault();
    nav.toggleClass('is-act');
    if (nav.hasClass('is-act')) {
      btn.attr('aria-label', '메인 메뉴 닫기');
    } else {
      btn.attr('aria-label', '메인 메뉴 열기');
    }
  });

  li.on('click keydown', function(e){
    if(e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)){
      // li.removeClass('menu-act');
      // span.removeClass('icon-minus').addClass('icon-plus');
      // $(this).find('.menu-item').removeClass('icon-plus').addClass('icon-minus');
      // $(this).addClass('menu-act');
      if($(this).hasClass('menu-act')){
        $(this).removeClass('menu-act');
        span.removeClass('icon-minus').addClass('icon-plus');
        span.attr('aria-expanded', 'false');
      }else{
        li.removeClass('menu-act');
        span.removeClass('icon-minus').addClass('icon-plus');
        span.attr('aria-expanded', 'false');
        $(this).find('.menu-item').removeClass('icon-plus').addClass('icon-minus');
        $(this).find('.menu-item').attr('aria-expanded', 'true');
        $(this).addClass('menu-act');
      }
    }
  });
  menu.on('focusout', function(){
    nav.removeClass('is-act');
  });
  menu.on('focusin', function(){
      nav.addClass('is-act');
  });
}