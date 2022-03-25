var form = document.getElementById('checkout-form')
var modal = document.getElementById('confirmation-modal')
var modalOverlay = document.getElementById('confirmation-modal-overlay')
var inputs = {
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    fullName: document.getElementById('fullname'),
    address: document.getElementById('address'),
    city: document.getElementById('city'),
    country: document.getElementById('country'),
    postalCode: document.getElementById('postalcode'),

}

form.addEventListener('submit', function (event) {
    const isFormValid = validateForm()
    event.preventDefault();
    
    if (isFormValid) {
        modalMessage = 'Submitted Successfully ✔️'
        toggleModal(true, modalMessage)
    } else {
        modalMessage = 'Form has Errors ❌'
        toggleModal(true, modalMessage)
    }
    
});

function validateForm() {

    for (let key in inputs) {
        if (!inputs[key].validity.valid) {
            return false
        }
    }

    return true
}

function toggleModal(show, message = '') {

    if (!show) {
        modalOverlay.style.opacity = '0'
        modalOverlay.style['z-index'] = '-10'
        modal.style.opacity = '0'
        modal.style.transform = 'translate(-50%, -100%)'
        modal.style['z-index'] = '-10'
    } else {
        modal.querySelector('p').innerText = message
        modalOverlay.style.opacity = '0.5'
        modalOverlay.style['z-index'] = '10'
        modal.style.opacity = '1'
        modal.style['z-index'] = '11'
        modal.style.transform = 'translate(-50%, -50%)'
    }
}