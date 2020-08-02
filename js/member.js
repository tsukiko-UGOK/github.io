function toggleNav() {
  let body = document.body;
  let na_pic = document.getElementById('na_pic');
  let na_char = document.getElementById('na_char');
  let br_pic = document.getElementById('br_pic');
  let br_char = document.getElementById('br_char');
  let sy_pic = document.getElementById('sy_pic');
  let sy_char = document.getElementById('sy_char');
  let kn_pic = document.getElementById('kn_pic');
  let kn_char = document.getElementById('kn_char');
  let sm_pic = document.getElementById('sm_pic');
  let sm_char = document.getElementById('sm_char');
  let kr_pic = document.getElementById('kr_pic');
  let kr_char = document.getElementById('kr_char');

  na_pic.addEventListener('click', function () {
    body.classList.toggle('na_open');
  });
  na_char.addEventListener('click', function () {
    body.classList.remove('na_open');
  });

  br_pic.addEventListener('click', function () {
    body.classList.toggle('br_open');
  });
  br_char.addEventListener('click', function () {
    body.classList.remove('br_open');
  });
  
  sy_pic.addEventListener('click', function () {
    body.classList.toggle('sy_open');
  });
  sy_char.addEventListener('click', function () {
    body.classList.remove('sy_open');
  });
  
  kn_pic.addEventListener('click', function () {
    body.classList.toggle('kn_open');
  });
  kn_char.addEventListener('click', function () {
    body.classList.remove('kn_open');
  });
  
  sm_pic.addEventListener('click', function () {
    body.classList.toggle('sm_open');
  });
  sm_char.addEventListener('click', function () {
    body.classList.remove('sm_open');
  });
  
  kr_pic.addEventListener('click', function () {
    body.classList.toggle('kr_open');
  });
  kr_char.addEventListener('click', function () {
    body.classList.remove('kr_open');
  });
}
toggleNav();
