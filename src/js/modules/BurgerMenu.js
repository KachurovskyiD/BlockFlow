function BurgerMenu() {
  const navBurger = document.querySelector('#check-menu'),
    burgerMenu = document.querySelector('.navigation__wrapper');

  document.addEventListener('click', () => {
    if (navBurger.checked === true) {
      burgerMenu.classList.add('active');
    } else if (navBurger.checked === false) {
      burgerMenu.classList.remove('active');
    }
  });
}

export default BurgerMenu;
