
const accItens = document.getElementsByClassName('accordion__title');
let focusIndex = 0;

accItens[focusIndex].focus();

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') switchAccordionFocus(-1);
    if (e.key === 'ArrowDown') switchAccordionFocus(1);
});

function switchAccordionFocus(increase) {
    focusIndex += increase;
    if (focusIndex < 0) focusIndex = accItens.length - 1;
    if (focusIndex > accItens.length - 1) focusIndex = 0;
    
    accItens[focusIndex].focus();
}