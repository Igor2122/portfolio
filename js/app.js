// Work Section div animations 

const jsIcon = document.querySelector('.js');
const hmtlIcon = document.querySelector('.html');
const itemDiv = document.querySelector('.item');

// Event lisntner 

document.querySelector('.item').addEventListener('mouseenter', animate_item);

document.querySelector('.item').addEventListener('mouseout', unAnimate);
// document.getElementById('sections').addEventListener('mouseover', unAnimate);



// function translateElemtns() {
//         jsIcon.setAttribute('style', 'transform: translateX(-100%) rotate(-45deg);');
//         hmtlIcon.setAttribute('style', 'transform: translateX(100%) rotate(45deg);');
//         itemDiv.style.transform = "rotate(7deg)";
//         itemDiv.style.transform = "scale(1.2)";


function animate_item() {
    // setTimeout(translateElemtns
    // , 500);
    jsIcon.setAttribute('style', 'transform: translateX(-100%) rotate(-45deg);');
    hmtlIcon.setAttribute('style', 'transform: translateX(100%) rotate(45deg);');
    itemDiv.style.transform = "rotate(7deg)";
    itemDiv.style.transform = "scale(1.2)";
};

function unAnimate() {
    jsIcon.setAttribute('style', 'transform: translateX(0%) rotate(0deg);');
    hmtlIcon.setAttribute('style', 'transform: translateX(0%) rotate(0deg);');
    console.log('leave');
    itemDiv.style.transform = "rotate(0deg)";
}