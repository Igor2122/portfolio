// Animations to the links on Services page 
const items = document.querySelectorAll('.item');
const buttonsDiv = document.querySelector('.buttons-div');
const buttons = document.querySelectorAll('.about-button');


class Ui {
    animate(target, target2) {
        target.style.left = '30px';
        target2.style.top = '-5px';
    }
    unanimate(target, target2) {
        target.style.left = '';
        target2.style.top = '';
    }

    btnOver(e) {
        e.target.style.background = 'red';
    }
    btnLeave(e) {
        e.target.style.background = '';
    }

}

// get event listeners 
for (let i = 0; i < items.length; i++) {
    const ui = new Ui();
    items[i].addEventListener('mouseenter', function (e) {

        const link = e.target.childNodes[7];
        const link2 = e.target.childNodes[1];
        console.log(link2);

        if (e.target.classList.contains('item')) {
            ui.animate(link, link2);
            console.log('entered');
        }

    });
    items[i].addEventListener('mouseleave', function (e) {
        const link2 = e.target.childNodes[1];
        const link = e.target.childNodes[7];

        ui.unanimate(link, link2);
    })
}

// buttons events 
for (let i = 0; i < buttons.length; i++) {
    const ui = new Ui();
    buttons[i].addEventListener('mouseenter', function () {
        ui.btnOver(event);
    });
    buttons[i].addEventListener('mouseleave', function () {
        ui.btnLeave(event);
    });
}

console.log(screen.width);


const portfolio = document.querySelector('.portfolio');
const lgImg = document.querySelectorAll('.hidden');
const body = document.getElementsByTagName('body');
let counter = 1;



if(screen.width > 500) {


for (const image of lgImg) {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        let lightbox = document.createElement('div');
        let imageDiv = document.createElement('div');
        imageDiv.innerHTML = `
        <img class="lg-img m-auto" src="../img/img-${counter}.jpeg">
        `;
        lightbox.className = 'overlay-img row align-items-center';
        imageDiv.className = 'col-md-8 h-100 m-auto w-75 d-flex';
        lightbox.appendChild(imageDiv);
        console.log(lightbox);
        body[0].style.overflow = 'hidden';
        portfolio.appendChild(lightbox);
        if (counter > 2) {
            counter--;
        } else {
            counter++;
        }

        console.log(counter);




        lightbox.addEventListener('click', () => {
            image.classList.remove('img-cnetered');
            portfolio.removeChild(lightbox);
            body[0].style.overflow = '';
        })
    })
}

}


console.log(portfolio);