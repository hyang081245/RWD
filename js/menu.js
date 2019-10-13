$(window).resize(function(){
  location.reload();
});
var viewport = window.matchMedia('(max-width:999px)');
var item = $('.menu-item');
var li = $('.menu-list');

  if(viewport.matches){
    //모바일 디바이스에서 실행할 코드 블럭
    var nav = $('.navigation');
    var btn = $('.btn-menubar');
    var menu = $('.menu');
 
    btn.attr('aria-haspopup', 'true');
    li.addClass('icon-plus');

    item.attr('role', 'button');
    item.attr('aria-haspopup', 'true');
    item.attr('aria-pressed', 'false');
      item.attr('aria-expanded', 'false');

    // 버튼(btn)을 클릭하면 내비게이션(nav) 요소를 찾아서 
    // nav-act라는 클래스를 추가하거나 제거할것(toggle)
    btn.click(function(e){
      //e.prebentDefault();
      nav.toggleClass('nav-act');
      if (nav.hasClass('nav-act')) {
        btn.attr('aria-label', '메뉴 닫기');
        btn.attr('aria-pressed', 'true')
      } else {
        btn.attr('aria-label', '메뉴 열기');
        btn.attr('aria-pressed', 'false')
      }
    });
    //메뉴 버튼(.menu-item)을 클릭하면 
    //클릭한 버튼의 부모 요소의 형제 요소들을 찾아 menu-act라는 클래스를 삭제한다.
    // 클릭한 버튼의 부모 요소인 menu-list에 menu-act라는 클래스를 추가한다.
    item.click(function(e){
      e.preventDefault();
      li.removeClass('menu-act');
      li.removeClass('icon-minus').addClass('icon-plus');
      item.attr('aria-pressed', 'false');
      item.attr('aria-expanded', 'false');
      $(this).parent().addClass('menu-act');
      $(this).attr('aria-pressed', 'true');
      $(this).attr('aria-expanded', 'true');
      
      if($(this).parent().hasClass('menu-act')){
        $(this).parent().removeClass('icon-plus').addClass('icon-minus');

      }
      

    });
  
  }else{
// 데스크탑 디바이스에서 실행할 코드 블럭
    item.attr('role', 'presentation');
    li.addClass('icon-star');
  }