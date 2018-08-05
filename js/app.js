// Work Section div animations 

const jsIcon = document.querySelector('.js');
const hmtlIcon = document.querySelector('.html');
const itemDiv = document.querySelectorAll('.item');

// Event lisntner 
let allItems; 

for(let i = 0; i < itemDiv.length; i++){
    itemDiv[i].addEventListener('mouseout', unAnimate);
    itemDiv[i].addEventListener('mouseenter', animate_item);
}

let anim1;
let anim2;
let anim3;

const animationForward = function translateElemtns() {
    anim1 = setTimeout(function(){
        jsIcon.setAttribute('style', 'transform: translateX(-100%) rotate(-45deg) ;');
    }, 50);
    hmtlIcon.setAttribute('style', 'transform: translateX(100%) rotate(45deg);');
    // itemDiv.style.transform = "rotate(7deg)";
}

const animationBackward = function () {
    jsIcon.setAttribute('style', 'transform: translateX(0%) rotate(0deg);');
    hmtlIcon.setAttribute('style', 'transform: translateX(0%) rotate(0deg);');
    
}

let anim;

function animate_item() {
    // itemDiv.style.transform = "scale(1.2)";
    anim = setTimeout('animationForward()', 200);
};

function unAnimate() {
    clearTimeout(anim);
    animationBackward();
}