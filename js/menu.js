(function(){
  var nojs = document.querySelectorAll('.no-js');
  nojs.forEach(function(el) {
    el.classList.remove('no-js');
  });

  var nav = document.querySelector('.navigation');
  var header = document.querySelector('.main-header');
  var menuButton = document.querySelector('.main-header__menu-button');
  menuButton.classList.add('main-header__menu-button--closed');
  menuButton.addEventListener('click', function toggleMenu (event) {
    event.preventDefault();

    var opened = 'main-header__menu-button--opened';
    var closed = 'main-header__menu-button--closed';

    if(menuButton.classList.contains(opened)){
      menuButton.classList.remove(opened);
      menuButton.classList.add(closed);

      header.classList.remove('main-header--opened');
      nav.classList.remove('navigation--opened');
    } else {
      menuButton.classList.remove(closed);
      menuButton.classList.add(opened);

      header.classList.add('main-header--opened');
      nav.classList.add('navigation--opened');
    }
  })
})();
