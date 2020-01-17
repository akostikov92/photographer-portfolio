/** @format */

const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a');

const toggleNav = () => {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('nav-open');
};

const toggleBurger = () => {
  const burgerEl = document.querySelectorAll('.burger > span');

  burgerEl.forEach(el => {
    el.classList.toggle('toggle');
  });
};

const linkClickHandler = () => {
  toggleBurger();
  toggleNav();

  links.forEach(link => {
    link.removeEventListener('click', linkClickHandler);
  });
};

const burgerClickHandler = () => {
  toggleBurger();
  toggleNav();

  links.forEach(link => {
    link.addEventListener('click', linkClickHandler);
  });
};

burger.addEventListener('click', burgerClickHandler);
