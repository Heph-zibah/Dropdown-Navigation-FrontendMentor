# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview
The challenge is to build out intro section with dropdown navigation and get it looking as close to the design as possible.
### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page
### Links

- Solution URL: [Snap Landing Page Solution URL](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5/hub/intro-section-with-dropdown-navigation-SyGrDfrevc/)
- Live Site URL: [Snap Landing Page Live Site URL](https://snap-landing-page-frontendmentor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I was able to implement mobile-first workflow

```html
<header>
        ...
    </header>
```
```css
@media screen and (max-width:375px) {
}
@media (min-width:1090px) {
}
@media (min-width:1440px) {
}
```
```js
const menuBar = document.querySelector('.menu-bar');
const modal = document.querySelector('#simpleModal');
const closeBtn = document.querySelector('.closeBtn')

menuBar.addEventListener('click', () => {
    console.log(modal);
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
```
### Continued development

- Mobile-first workflow
- CSS custom components
- Javascript

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
