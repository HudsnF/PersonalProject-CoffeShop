const buttonActive = document.getElementById('menu-btn');
const listSocial = document.querySelector('.list-social');
const textInfo = document.querySelector('.text');
const viewMore = document.querySelector('.btn-view-more');
const flavorsView = document.querySelector('.sub-flavors');
const btnFlavors = document.querySelector('.btn-flavors');
// ---------------------order-active----------------------
const btnOrder = document.querySelector('.btn-order-now');
const orderBorder = document.querySelector('.order');
const thankBorder = document.querySelector('.thank-you');
const btnChooseAgain = document.querySelector('.btn-choose-again');
const btnConfirm = document.querySelector('.btn-confirm');
const btnClose = document.querySelector('.btn-close');
const buttons = document.querySelectorAll('.btn-choose');




function buttonClicked() {

    viewMore.addEventListener('click', () => {
        textInfo.classList.toggle('active');
        if (!listSocial.classList.contains('active') || !flavorsView.classList.contains('active')) {
            flavorsView.classList.add('active');
            listSocial.classList.add('active');
        }
    })

    btnFlavors.addEventListener('click', () => {
        flavorsView.classList.toggle('active');
        if (!listSocial.classList.contains('active') || !textInfo.classList.contains('active')) {
            textInfo.classList.add('active');
            listSocial.classList.add('active');
        }
    })

    buttonActive.addEventListener('click', () => {
        listSocial.classList.toggle('active');
        if (!textInfo.classList.contains('active') || !flavorsView.classList.contains('active')) {
            textInfo.classList.add('active');
            flavorsView.classList.add('active');
        }
    })
}


function orderActive() {
    btnOrder.addEventListener('click', () => {
        orderBorder.classList.toggle('order-active');
        if (!textInfo.classList.contains('active') || !flavorsView.classList.contains('active')) {
            textInfo.classList.add('active');
            flavorsView.classList.add('active');
        }
    })

    btnChooseAgain.addEventListener('click', () => {
        orderBorder.classList.add('order-active');
    })

    btnConfirm.addEventListener('click', () => {
        thankBorder.classList.toggle('order-active');
        orderBorder.classList.add('order-active');
    })

    btnClose.addEventListener('click', () => {
        thankBorder.classList.toggle('order-active');
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const flavor = button.textContent.trim();
            document.getElementById('span').textContent = flavor;
            if (!flavorsView.classList.contains('active')) {
                flavorsView.classList.add('active')
            }
        })

    })
}


buttonClicked();
orderActive();