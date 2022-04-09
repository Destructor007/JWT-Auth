function validation() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var pincode = document.getElementById("pincode").value;
  var country = document.getElementById("country").value;

  var checkUsername = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  var checkPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
  var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var checkPhone = /^[6789][0-9]{9}$/;
  var checkPincode = /^[0-9]{6}$/;

  if (checkUsername.test(username)) {
    document.getElementById("userError").innerHTML = "";
  } else if (username == "") {
    document.getElementById("userError").innerHTML = "Please enter Username";
  } else {
    document.getElementById("userError").innerHTML = "Username is not valid";
    return false;
  }

  if (checkPassword.test(password)) {
    document.getElementById("passError").innerHTML = "";
  } else if (password == "") {
    document.getElementById("passError").innerHTML = "Please enter Password";
  } else {
    document.getElementById("passError").innerHTML = "Password must contain: <br> one uppercase, <br> one lowercase, <br>one number, <br> one special character";
    return false;
  }

  if (password == confirmPassword) {
    document.getElementById("conPassError").innerHTML = "";
  } else if (confirmPassword == "") {
    document.getElementById("conPassError").innerHTML =
      "Please enter Confirm Password";
  } else {
    document.getElementById("conPassError").innerHTML =
      "Password does not match";
    return false;
  }

  if (checkEmail.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else if (email == "") {
    document.getElementById("emailError").innerHTML = "Please enter Email";
  } else {
    document.getElementById("emailError").innerHTML = "Email is not valid";
    return false;
  }

  if (firstName == "") {
    document.getElementById("firstNameError").innerHTML =
      "Please enter First Name";
    return false;
  } else {
    document.getElementById("firstNameError").innerHTML = "";
  }

  if (lastName == "") {
    document.getElementById("lastNameError").innerHTML =
      "Please enter Last Name";
    return false;
  } else {
    document.getElementById("lastNameError").innerHTML = "";
  }

  if (checkPhone.test(phone)) {
    document.getElementById("phoneError").innerHTML = "";
  } else if (phone == "") {
    document.getElementById("phoneError").innerHTML =
      "Please enter Phone number";
  } else {
    document.getElementById("phoneError").innerHTML =
      "Phone number is not valid";
    return false;
  }

  if (address == "") {
    document.getElementById("addressError").innerHTML =
      "Please enter Address";
    return false;
  } else {
    document.getElementById("addressError").innerHTML = "";
  }

  if (city == "") {
    document.getElementById("cityError").innerHTML = "Please enter City";
    return false;
  } else {
    document.getElementById("cityError").innerHTML = "";
  }

  if (state == "") {
    document.getElementById("stateError").innerHTML = "Please enter State";
    return false;
  } else {
    document.getElementById("stateError").innerHTML = "";
  }

  if (checkPincode.test(pincode)) {
    document.getElementById("pincodeError").innerHTML = "";
  } else if (pincode == "") {
    document.getElementById("pincodeError").innerHTML =
      "Please enter Pincode";
  } else {
    document.getElementById("pincodeError").innerHTML =
      "Pincode is not valid";
    return false;
  }

  if (country == "") {
    document.getElementById("countryError").innerHTML = "Please enter Country";
    return false;
  } else {
    document.getElementById("countryError").innerHTML = "";
  }
}
