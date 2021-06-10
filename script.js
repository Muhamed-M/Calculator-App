const inputScreen = document.querySelector('input[type="text"]');
const btns = document.getElementsByClassName('chars');
const del = document.getElementById('delete');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');
const checkbox = document.getElementsByClassName('checkbox')[0];
const body = document.querySelector('body');

function keypadInput() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            inputScreen.value += btns[i].innerHTML;
        });
    }
    del.addEventListener('click', () => {
        inputScreen.value = inputScreen.value.slice(0, -1);
    });
    reset.addEventListener('click', () => {
        inputScreen.value = " ";
    });
    equal.addEventListener('click', () => {
        inputScreen.value = eval(inputScreen.value);
    });
}
keypadInput();

function themeOne() {
    const toggle = document.getElementById('themeOne');
    
    toggle.addEventListener('click', () => {
        checkbox.style.transform = 'translateX(0)';
        body.className = '';
    }); 
}
themeOne();

function themeTwo() {
    const toggle = document.getElementById('themeTwo');
    
    toggle.addEventListener('click', () => {
        checkbox.style.transform = 'translateX(23.33px)';
        body.className = '';
        body.classList.toggle('theme-two');
    });
}
themeTwo();

function themeThree() {
    const toggle = document.getElementById('themeThree');
    
    toggle.addEventListener('click', () => {
        checkbox.style.transform = 'translateX(46.66px)';
        body.className = '';
        body.classList.toggle('theme-three');
    });
}
themeThree();