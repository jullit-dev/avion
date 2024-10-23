const noticeEl = document.querySelector('.notice');
const stepperEls = document.querySelectorAll('.stepper');

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
      stepperBtnPlusEl.classList.remove('stepper__btn--disabled');
      stepperBtnMinusEl.classList.remove('stepper__btn--disabled');
      
      if (stepperInputEl.value < stepperMin) {
        stepperInputEl.value = stepperMin;
        stepperBtnMinusEl.classList.add('stepper__btn--disabled');
      };
  
      if (stepperInputEl.value > stepperMax) {
        stepperInputEl.value = stepperMax;
        stepperBtnPlusEl.classList.add('stepper__btn--disabled');
      };
    });
  
    stepperBtnPlusEl.addEventListener('click' , () => {
      count = Number(stepperInputEl.value);
      if (count < stepperMax) {
        count++;
        stepperInputEl.value = count;
        stepperBtnMinusEl.classList.remove('stepper__btn--disabled');
      };
      if (count === stepperMax) {
        stepperBtnPlusEl.classList.add('stepper__btn--disabled');
      };
    });
  
    stepperBtnMinusEl.addEventListener('click' , () => {
      count = Number(stepperInputEl.value);
      if (count > stepperMin) {
        count--;
        stepperInputEl.value = count;
        stepperBtnPlusEl.classList.remove('stepper__btn--disabled');
      };
      if (count === stepperMin) {
        stepperBtnMinusEl.classList.add('stepper__btn--disabled');
      };
    });
  });
};