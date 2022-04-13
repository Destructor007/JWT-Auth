const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const phone = document.querySelector('#phone');
const pincode = document.querySelector('#pincode');

form.addEventListener('submit', (e) => {
  validation();
  
  if (isValidForm()) {
    form.submit();
  } else {
    e.preventDefault()
  }
})

function isValidForm() {
  const inputs = form.querySelectorAll('.form-group');
  let valid = true;
  inputs.forEach((input) => {
    if (input.classList.contains('wrong')) {
      valid = false;
    }
    return valid;
  })
}


function validation() {
  if (isValidUsername(username.value)) {
    setSuccess(username);
  } else {
    setError(username, 'Username is not valid');
  }
  
  if (isValidPassword(password.value)) {
    setSuccess(password);
  } else {
    setError(password, 'Password must be 8-10 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character');
  }

  if (isValidConfirmPassword(password.value, confirmPassword.value)) {
    setSuccess(confirmPassword);
  } else {
    setError(confirmPassword, 'Password does not match');
  }
  
  if (isValidEmail(email.value)) {
    setSuccess(email);
  } else {
    setError(email, 'Please enter a valid email');
  }

  if (isValidPhone(phone.value)) {
    setSuccess(phone);
  }
  else {
    setError(phone, 'Please enter a valid phone number');
  }

  if (isValidPin(pincode.value)) {
    setSuccess(pincode);
  }
  else {
    setError(pincode, 'Please enter a valid pincode');
  }
}

function isValidUsername(username) {
  const checkUsername = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  return checkUsername.test(username);
}

function isValidPassword(password) {
  const checkPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
  return checkPassword.test(password);
}

function isValidConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function isValidEmail (email) {
  const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return checkEmail.test(email);
}

function isValidPhone(phone) {
  const checkPhone = /^[6789][0-9]{9}$/;
  return checkPhone.test(phone);
}
function isValidPin(pincode) {
  const checkPin = /^[0-9]{6}$/;
  return checkPin.test(pincode);
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains('success')) {
    parent.classList.remove('success');
  }
  parent.classList.add('wrong');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains('wrong')) {
    parent.classList.remove('wrong');
  }
  parent.classList.add('success');
}