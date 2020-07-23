let ebrowser = window.navigator.userAgent.toLowerCase(); //ブラウザ取得
let body = document.body;
let head = document.getElementById('head');
let phonehead = document.getElementById('phonehead');

//ヘッダー挙動記述
let classRemove = (mid, rc) => {
  if (mid.classList.contains(rc)) {
    mid.classList.remove(rc);
  }
};

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (scroll > 0) {
    head.classList.add('headback');
    phonehead.classList.add('headback');
  } else {
    classRemove(head, 'headback');
    phonehead.classList.add('headback');
  }
};

//スムーススクロール記述
//各要素取得
let navOne = document.getElementById('one');
let hamOne = document.getElementById('hamone');
let uebxli = document.getElementById('uebxli');
let navTwo = document.getElementById('two');
let hamTwo = document.getElementById('hamtwo');
let plo = document.getElementById('plo');
let navThr = document.getElementById('three');
let hamThr = document.getElementById('hamthree');

//ハンバーガーメニュー記述
function toggleNav() {
  let body = document.body;
  let hamburger = document.getElementById('js_hamburger');
  let nav = document.getElementById('hamnav');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open');
  });
  nav.addEventListener('click', function () {
    body.classList.remove('nav_open');
  });
}
toggleNav();
