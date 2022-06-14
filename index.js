'use strict';

const steps = document.querySelectorAll('.progress__container-steps');
const bars = document.querySelectorAll('.progress__container-bar');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
btnNext.classList.add('progress__buttons--active');

let currStep = 0;
const maxStep = steps.length;

btnNext.addEventListener('click', () => {
    if (currStep < maxStep - 1) {
        currStep++;
        steps.forEach(
            (s,i) => {
                if (i === currStep){ 
                    s.classList.add('progress__container-steps--active')
                }
            }
        )
        bars.forEach(
            (s,i) => {
                if (i === currStep - 1){
                    s.classList.add('progress__container-bar--active')
                }
            }
        )
    }
    checkCurrentStep();
    
});


btnPrev.addEventListener('click', () => {
    if (currStep > 0) {
        steps.forEach(
            (s,i) => {
                if (i === (currStep)){ 
                    s.classList.remove('progress__container-steps--active')
                }
            }
        )
        bars.forEach(
            (s,i) => {
                if (i === (currStep - 1)){
                    s.classList.remove('progress__container-bar--active')
                }
            }
        )
        currStep--;
    }
    checkCurrentStep();
});


function checkCurrentStep(){
    if (currStep > 0 && currStep < maxStep-1){
        btnNext.classList.add('progress__buttons--active');
        btnPrev.classList.add('progress__buttons--active');
    }
    else if (currStep === 0){
    
        btnNext.classList.add('progress__buttons--active');
        btnPrev.classList.remove('progress__buttons--active');
    }
    else {
        btnNext.classList.remove('progress__buttons--active');
        btnPrev.classList.add('progress__buttons--active');
    }
}
