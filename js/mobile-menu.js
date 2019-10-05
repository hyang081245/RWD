var body = document.querySelector('body');
var nav = document.querySelector('.navigation');
var btn = document.querySelector('.btn-menubar');
var menu = document.querySelector('.menu');
var menuItems = document.querySelectorAll('.menu-item');
var subMenus = document.querySelectorAll('.sub-menu');
var menuNext = document.querySelector('.main');
var mobile = window.matchMedia('(max-width: 999px)');



// 메인 메뉴 토글을 실행하기 위한 함수 정의
function menuToggle() {
  nav.classList.toggle('is-act');
  if (nav.classList.contains('is-act')) {
    btn.setAttribute('aria-label', '메인 메뉴 닫기');
  } else {
    btn.setAttribute('aria-label', '메인 메뉴 열기');
  }
}
// 햄버거 메뉴 버튼에 click 이벤트가 발생 했을 때 메인 메뉴 토글을 위해 정의한 함수를 실행
btn.addEventListener('click', function(){ menuToggle(); });

menu.addEventListener('focusout', function () {
  nav.classList.remove('is-act');
});
menu.addEventListener('focusin', function() {
  nav.classList.add('is-act');
});
// 메인 메뉴의 span 요소 click , keydown 이벤트 발생 시 실행할 함수
var clickKeydown = ['click', 'keyup'];
    for(var event of clickKeydown) {
      for(var i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener(event, function() {
          if(event.type === 'click' || (event.type === 'keydown' && event.keyCode === 13)){
            
          }
        });
      }
    }





// function allCloseMenu() {
//   for(var i = 0; i < subMenus.length; i++){
//     subMenus[i].style.display = 'none';
//   }
// }

// function accordion() {
//   if(!mobile.matches) return;
//   allCloseMenu();
// }




// for(var i = 0; i > menuItems.length; i++ ){
//   menuItems[i].addEventListener('click', function() {
//     accordion();
//   });

// }


// (function accordion(){
//   if(!mobile.matches) return;
//   var menuItems = document.querySelectorAll('.menu-item');
//   var subMenus = document.querySelectorAll('.sub-menu');

//   menuItems.addEventListener('click', function(event) {
//     event.preventDefault();
//     if(this.getAttribute('aria-expanded') === 'true'){

//     }
//   });


//   function allClose() {
//     for(var i = 0; i < subMenu.length; i++){
//       subMenus[i].style.display = 'none';
//       subMenus[i].previousElementSibling.classList.remove('icon-minus');
//       subMenus[i].previousElementSibling.classList.add('icon-plus');
//     }
//   }
// }());



// var container = document.querySelector('.menubar-container');
// var btn = document.querySelector('.btn-menubar');
// var menubars = document.querySelectorAll('.menubar');
// var menu = document.querySelector('.main-menu');
// var menuItems = menu.querySelectorAll('li');
// var menuItemLast = menu.lastElementChild;
// var sub = document.querySelectorAll('.sub-menu');
// var subLast = menuItemLast.lastElementChild;
// var subItemLast = subLast.lastElementChild;
// var subItemLastLink = subItemLast.querySelector('a');


//     btn.addEventListener('click', function () {
//       btn.classList.toggle('menubar-act');
//       menu.classList.toggle('main-menu-act');
//       if(btn.classList.contains('menubar-act')){
//         btn.setAttribute('aria-label', '메인 메뉴 닫기');
//       }else{
//         btn.setAttribute('aria-label', '메인 메뉴 열기');
//       }
//     });

//     menuItemLast.addEventListener('keydown', function(){
//       if(event.keyCode === 9 && !this.classList.contains('menu-item-act')){
//         btn.classList.remove('menubar-act');
//         menu.classList.remove('main-menu-act');
//       }
//     });
//     subItemLastLink.addEventListener('keydown', function(){
//       if(event.keyCode === 9){
//         btn.classList.remove('menubar-act');
//         menu.classList.remove('main-menu-act');
//       }
//     });

//     var clickKeyup = ['click', 'keyup', 'touch'];
//     for(var event of clickKeyup) {
//       for(var i = 0; i < menuItems.length; i++){
//         menuItems[i].addEventListener(event, function() {
//           if(event.keyCode === 13 || event.type === 'click' || event.type === 'touch'){
//             if(!this.classList.contains('menu-item-act')){
//               for(var i = 0; i < menuItems.length; i++){
//                 menuItems[i].classList.remove('menu-item-act');
//               }
//             }
//             this.classList.toggle('menu-item-act');
//           }
//         });
//       }
//     }