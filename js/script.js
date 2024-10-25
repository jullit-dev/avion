const noticeEl = document.querySelector('.notice');
const stepperEls = document.querySelectorAll('.stepper');
const burgerEl = document.querySelector('.burger');
const filtersBtnEl = document.querySelector('.catalog__mobile-btn');

if (filtersBtnEl) {
  const filtersEl = document.querySelector('.filters');
  filtersBtnEl.addEventListener('click', () => {
    filtersBtnEl.classList.toggle('catalog__mobile-btn--active');
    filtersEl.classList.toggle('filters--active');
  });
}

if (burgerEl) {
  const body = document.body;
  const menuEl = document.querySelector('.header__bottom');
  const menuListEl = document.querySelector('.header__list');
  burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('burger--active');
    menuEl.classList.toggle('header__bottom--active');
    menuListEl.classList.toggle('header__list--active');
    body.classList.toggle('stop-scroll');
  });
};

if (noticeEl) {
  const noticeCloseEl = noticeEl.querySelector('.notice__close');
  noticeCloseEl.addEventListener('click', () => {
    noticeEl.classList.add('notice--hidden');
  });
};

if (stepperEls) {
  stepperEls.forEach(stepperEl => {
    const stepperInputEl = stepperEl.querySelector('.stepper__input');
    const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn--minus');
    const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn--plus');
  
    const stepperMin = Number(stepperInputEl.getAttribute('min'));
    const stepperMax = Number(stepperInputEl.getAttribute('max'));
  
    let count = Number(stepperInputEl.value);
  
    stepperEl.addEventListener('change', () => {
      stepperBtnPlusEl.disabled = false;;
      stepperBtnMinusEl.disabled = false;;
      
      if (stepperInputEl.value < stepperMin) {
        stepperInputEl.value = stepperMin;
        stepperBtnMinusEl.disabled = true;;
      };
  
      if (stepperInputEl.value > stepperMax) {
        stepperInputEl.value = stepperMax;
        stepperBtnPlusEl.disabled = true;;
      };
    });
  
    stepperBtnPlusEl.addEventListener('click' , () => {
      count = Number(stepperInputEl.value);
      if (count < stepperMax) {
        count++;
        stepperInputEl.value = count;
        stepperBtnMinusEl.disabled = false;;
      };
      if (count === stepperMax) {
        stepperBtnPlusEl.disabled = true;;
      };
    });
  
    stepperBtnMinusEl.addEventListener('click' , () => {
      count = Number(stepperInputEl.value);
      if (count > stepperMin) {
        count--;
        stepperInputEl.value = count;
        stepperBtnPlusEl.disabled = false;;
      };
      if (count === stepperMin) {
        stepperBtnMinusEl.disabled = true;;
      };
    });
  });
};