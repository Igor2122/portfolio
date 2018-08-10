// Animations to the links on Services page 
const items = document.querySelectorAll('.item');



class Ui {
    animate(target) {
        target.style.left = '30px';
    }
    unanimate(target) {
        target.style.left = '';
    }
}

// get event listeners 
for (let i = 0; i < items.length; i++) {
    const ui = new Ui();
    items[i].addEventListener('mouseenter', function (e) {
        
        const link = e.target.childNodes[7];
        
        if (e.target.classList.contains('item')) {
            ui.animate(link);
            console.log('entered');
        }
        
    });
    items[i].addEventListener('mouseleave', function (e) {
        const link = e.target.childNodes[7];

        ui.unanimate(link);
    })
}


// document.getElementById('secitons').addEventListener('mouseleave', animFinish);


















// // Work Section div animations 

// const jsIcon = document.querySelector('.js');
// const hmtlIcon = document.querySelector('.html');
// const itemDiv = document.querySelectorAll('.item');

// // Event lisntner 
// let allItems; 

// for(let i = 0; i < itemDiv.length; i++){
//     itemDiv[i].addEventListener('mouseout', unAnimate);
//     itemDiv[i].addEventListener('mouseenter', animate_item);
// }

// let anim1;
// let anim2;
// let anim3;

// const animationForward = function translateElemtns() {
//     anim1 = setTimeout(function(){
//         jsIcon.setAttribute('style', 'transform: translateX(-100%) rotate(-45deg) ;');
//     }, 50);
//     hmtlIcon.setAttribute('style', 'transform: translateX(100%) rotate(45deg);');
//     // itemDiv.style.transform = "rotate(7deg)";
// }

// const animationBackward = function () {
//     jsIcon.setAttribute('style', 'transform: translateX(0%) rotate(0deg);');
//     hmtlIcon.setAttribute('style', 'transform: translateX(0%) rotate(0deg);');

// }

// let anim;

// function animate_item() {
//     // itemDiv.style.transform = "scale(1.2)";
//     anim = setTimeout('animationForward()', 200);
// };

// function unAnimate() {
//     clearTimeout(anim);
//     animationBackward();
// }