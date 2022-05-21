//DESKTOP  DROPDOWN

const arrowDown1 = document.querySelector('.arrow-down1');
const arrowUp1 = document.querySelector('.arrow-up1');
const arrowDown2 = document.querySelector('.arrow-down2');
const arrowUp2 = document.querySelector('.arrow-up2');
const featuresModal = document.querySelector('.features-modal');
const companyModal = document.querySelector('.company-modal');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');

// EVENT LISTENER FOR DOWN ARROW (DESKTOP)
arrowDown1.addEventListener('click', () => {
    featuresModal.style.display = 'block';
    arrow1.style.display = 'none';
    arrowUp1.style.display = 'inline';
});

arrowDown2.addEventListener('click', () => {
    companyModal.style.display = 'block';
    arrow2.style.display = 'none';
    arrowUp2.style.display = 'inline';
});

// EVENT LISTENER FOR UP ARROW (DESKTOP)
arrowUp1.addEventListener('click', () => {
    featuresModal.style.display = 'none';
    arrow1.style.display = 'inline';
    arrowUp1.style.display = 'none';
});

arrowUp2.addEventListener('click', () => {
    companyModal.style.display = 'none';
    arrow2.style.display = 'inline';
    arrowUp2.style.display = 'none';
});

// MOBILE NAVIGATION
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

// MOBILE DROPDOWN
const mobileArrowDown1 = document.querySelector('.mobile-arrow-down1');
const mobileArrowUp1 = document.querySelector('.mobile-arrow-up1');
const mobileArrowDown2 = document.querySelector('.mobile-arrow-down2');
const mobileArrowUp2 = document.querySelector('.mobile-arrow-up2');
const mobileFeaturesModal = document.querySelector('.mobile-features-modal');
const mobileCompanyModal = document.querySelector('.mobile-company-modal');
const mobileArrow1 = document.querySelector('.mobile-arrow1');
const mobileArrow2 = document.querySelector('.mobile-arrow2');

// EVENT LISTENER FOR DOWN ARROW (MOBILE)
mobileArrowDown1.addEventListener('click', () => {
    mobileFeaturesModal.style.display = 'block';
    mobileArrow1.style.display = 'none';
    mobileArrowUp1.style.display = 'inline';
});

mobileArrowDown2.addEventListener('click', () => {
    mobileCompanyModal.style.display = 'block';
    mobileArrow2.style.display = 'none';
    mobileArrowUp2.style.display = 'inline';
});
// EVENT LISTENER FOR UP ARROW (MOBILE)
mobileArrowUp1.addEventListener('click', () => {
    mobileFeaturesModal.style.display = 'none';
    mobileArrow1.style.display = 'inline';
    mobileArrowUp1.style.display = 'none';
});

mobileArrowUp2.addEventListener('click', () => {
    mobileCompanyModal.style.display = 'none';
    mobileArrow2.style.display = 'inline';
    mobileArrowUp2.style.display = 'none';
});