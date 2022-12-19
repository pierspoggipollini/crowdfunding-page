
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const navWrapper = document.querySelector('.nav-wrapper');

const modalLayer = document.querySelectorAll('.modal-layer');
const modalLayerSelected = document.querySelectorAll('.modal-layer-selected');
const primaryHeader = document.querySelector('.primary-header');


const bookmarkToggle = document.querySelector('.bookmark-toggle');
const bookmarkActive = document.querySelector('.bookmark-toggle-active');
const bookmarkSpan = document.querySelector('.bookmark-s');


modalLayer[2].setAttribute('aria-disabled', true);
modalLayerSelected[3].setAttribute('aria-disabled', true);

//Button-nav-mobile

const mobileNav = () => {
     primaryNav.toggleAttribute('data-visible');
     document.querySelector('.icon-hamburger').classList.toggle("open");
     primaryHeader.toggleAttribute('data-overlay');


}

const ariaDisabled = () => {
     if (primaryHeader.hasAttribute('data-overlay')) {
          modalLayer[2].setAttribute('aria-disabled', false);
     } else {
          modalLayer[2].setAttribute('aria-disabled', true);
     }
}



navToggle.addEventListener('click', () => {
     mobileNav();
     ariaDisabled();
});


//Button-bookmark

bookmarkToggle.addEventListener('click', () => {
     bookmarkToggle.style.display = 'none';
     bookmarkActive.style.display = 'inline-flex';
});

bookmarkActive.addEventListener('click', () => {
     bookmarkActive.style.display = 'none';
     bookmarkToggle.style.display = 'inline-flex';
})


const radioButtons = document.querySelectorAll('input[type="radio"]');
const forms = document.querySelectorAll('form');


//Desktop input

const handleRadioClick = () => {
     for (let i = 0; i < forms.length; i++) {
          if (radioButtons[i].checked == true) {
               console.log(forms[i])
               forms[i].style.display = 'block';
               modalLayerSelected[i].setAttribute('data-visible', true)
          }
          else if (radioButtons[i].checked == false) {
               forms[i].style.display = 'none';
               modalLayerSelected[i].removeAttribute('data-visible')
          }

     }
}

radioButtons.forEach(radio => {
     radio.addEventListener('click', handleRadioClick);
});

//Mobile input

const handleModalClick = (event) => {
     for (let i = 0; i < forms.length; i++) {
          if (modalLayerSelected[i].contains(event.target)) {
               forms[i].style.display = 'block';
               modalLayerSelected[i].setAttribute('data-visible', true);
          } else if (!modalLayerSelected[i].contains(event.target)) {
               forms[i].style.display = 'none';
               modalLayerSelected[i].removeAttribute('data-visible')
          }
     }
}

modalLayerSelected.forEach(modal => {
     modal.addEventListener('click', (e) => {
          if (window.innerWidth <= 800) {
               return handleModalClick(e);
          }
     })
})


const iconCloseModal = document.querySelector('.icon-close-modal');

const backProject = document.querySelector('.button-project')

const boxModal = document.querySelector('.box-modal');

const x = document.querySelectorAll('input[type="text"]');

const buttonReward = document.querySelectorAll('.button-reward');

//Go to the top of page

function topFunction() {
     if (window.innerWidth <= 800) {
          document.body.scrollTo({
               top: 0,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 0,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera

     } else {
          document.body.scrollTo({
               top: 200,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 200,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera

     }

}

//Select from modal the reward

const selectRewardOne = () => {
     radioButtons[1].checked = true;
     boxModal.toggleAttribute('data-visible');
     primaryHeader.toggleAttribute('data-overlay');
     modalLayer[2].setAttribute('aria-disabled', false);
     modalLayerSelected[1].toggleAttribute('data-visible')
     forms[1].style.display = 'block';
     x[1].value = 25;
     navToggle.disabled = true;
     navWrapper.setAttribute('aria-disabled', true);
     navWrapper.classList.add('pointer-events-n');

}

const selectRewardTwo = () => {
     radioButtons[2].checked = true;
     boxModal.toggleAttribute('data-visible');
     primaryHeader.toggleAttribute('data-overlay');
     modalLayerSelected[2].toggleAttribute('data-visible')
     forms[2].style.display = 'block';
     x[2].value = 75;
     navToggle.disabled = true;
     navWrapper.setAttribute('aria-disabled', true);
     navWrapper.classList.add('pointer-events-n');
}


buttonReward[0].addEventListener('click', () => {
     topFunction();
     selectRewardOne();
     ariaDisabled();
});
buttonReward[1].addEventListener('click', () => {
     selectRewardTwo();
     topFunction();
     ariaDisabled();
});

//Button-project

backProject.addEventListener('click', (e) => {
     e.preventDefault();
     boxModal.toggleAttribute('data-visible');
     primaryHeader.toggleAttribute('data-overlay');
     navToggle.disabled = true;
     navWrapper.setAttribute('aria-disabled', true);
     navWrapper.classList.add('pointer-events-n');
     ariaDisabled();

})

iconCloseModal.addEventListener('click',
     function () {
          window.location.reload(true);
     }
);

const boxCompleted = document.querySelector('.box-completed')

//Allow to put only number in text input

function isInputNumber(evt) {
     let ch = String.fromCharCode(evt.which);
     if (!(/[0-9]/.test(ch))) {
          evt.preventDefault();
     }
}

x.forEach(y => {
     y.addEventListener('keypress', (event) => { return isInputNumber(event) })
})

//Clean the input text

function ClearFields() {
     for (let i = 0; i < forms.length; i++) {
          radioButtons[i].checked = false;
          forms[i].style.display = 'none';
          modalLayerSelected[i].removeAttribute('data-visible')
     }
     x.forEach(y => {
          y.value = "";
     })

}

const buttonModal = document.querySelectorAll('.button-modal');

//Form-Validation

const validateFormZero = (event) => {
     event.preventDefault();
     if (x[0].value >= 1) {
          boxCompleted.toggleAttribute('data-visible');
          boxModal.removeAttribute('data-visible');
          navWrapper.classList.add('pointer-events-n');
     }
}

//Go to the top of page

const topFunctionMobileZero = () => {
     if (window.innerWidth <= 768 && x[0].value >= 1) {
          document.body.scrollTo({
               top: 0,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 0,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera
     } else if (window.innerWidth > 800 && x[0].value >= 1) {
          document.body.scrollTo({
               top: 200,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 200,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera
     }
}

buttonModal[0].addEventListener('click', (e) => {
     validateFormZero(e);
     topFunctionMobileZero();
});



const validateFormOne = (event) => {
     event.preventDefault();
     if (x[1].value >= 25) {
          boxCompleted.toggleAttribute('data-visible');
          boxModal.removeAttribute('data-visible');
          x[1].classList.remove('error');
          navWrapper.classList.add('pointer-events-n');

     } else {
          x[1].setCustomValidity("Please pledge 25$ or more.");
          x[1].reportValidity();
          x[1].classList.add('error');
     }
}

const topFunctionMobileOne = () => {
     if (window.innerWidth <= 768 && x[1].value >= 25) {
          document.body.scrollTo({
               top: 0,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 0,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera
     } else if (window.innerWidth >= 800 && x[1].value >= 25) {
          document.body.scrollTo({
               top: 200,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 200,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera
     }
}

buttonModal[1].addEventListener('click', (e) => {
     validateFormOne(e);
     topFunctionMobileOne();
});

const validateFormTwo = (event) => {
     event.preventDefault();
     if (x[2].value >= 75) {
          boxCompleted.toggleAttribute('data-visible');
          boxModal.removeAttribute('data-visible');
          x[2].classList.remove('error');
          navWrapper.classList.add('pointer-events-n');
     } else {
          x[2].setCustomValidity("Please pledge 75$ or more.");
          x[2].reportValidity();
          x[2].classList.add('error');
     }
}

const topFunctionMobileTwo = () => {
     if (window.innerWidth <= 768 && x[2].value >= 75) {
          document.body.scrollTo({
               top: 0,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 0,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera
     } else if (window.innerWidth >= 800 && x[2].value >= 75) {
          document.body.scrollTo({
               top: 200,
               behavior: 'smooth'
          }); // For Safari
          document.documentElement.scrollTo({
               top: 200,
               behavior: 'smooth'
          });// For Chrome, Firefox, IE and Opera
     }
}

buttonModal[2].addEventListener('click', (e) => {
     validateFormTwo(e);
     topFunctionMobileTwo();
});

//Set the total value

const dollar = '$';
let data = 89914;
let formatted = new Intl.NumberFormat("us");
const dataFormatted = formatted.format(data);
const amount = document.querySelector('.amount');
amount.innerHTML = `${dollar}${dataFormatted}`;

const total = document.querySelector('.total');
const totalBacked = 100000;
const totalFormatted = formatted.format(totalBacked);
total.innerHTML = `of ${dollar}${totalFormatted} backed `;

const progressBar = document.querySelector('.progress');

//Update the total value

function updateTotal() {
     for (let i = 0; i < x.length; i++) {
          const value = x[i].value;
          const y = Number(value);
          console.log(y)
          data = data + y;
          if (data >= 93000) {
               progressBar.style.width = '93%';
          }
          if (data >= 95000) {
               progressBar.style.width = '95%';
          }
          if (data >= 97000) {
               progressBar.style.width = '97%';
          }
          if (data == 100000) {
               x[i].disabled = true;
               progressBar.style.width = '100%';
          }
     }
     amount.textContent = dollar + formatted.format(data);
     boxCompleted.removeAttribute('data-visible');
     primaryHeader.removeAttribute('data-overlay');
     boxModal.removeAttribute('data-visible');
}

const backers = document.querySelector('.backers');
let numBackers = 5007;

backers.innerHTML = formatted.format(numBackers);

function updateBackers() {
     numBackers = numBackers + 1;
     backers.textContent = formatted.format(numBackers);
}

//Button-Completed

document.getElementById('gotit').addEventListener('click', () => {
     updateTotal();
     updateBackers()
     ClearFields();
     navToggle.disabled = false;
     navWrapper.setAttribute('aria-disabled', false);
     navWrapper.classList.remove('pointer-events-n');
})




