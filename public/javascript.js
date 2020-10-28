M.AutoInit();

function validateForm() {
  var degree = document.forms["contactInputs"]["degreeType"].value;
  var field = document.forms["contactInputs"]["studyField"].text;
  var firstName = document.forms["contactInputs"]["first_name"].value;
  var lastName = document.forms["contactInputs"]["last_name"].value;
  var email = document.forms["contactInputs"]["email"].value;
  var phone = document.forms["contactInputs"]["phone"].value;
  var address = document.forms["contactInputs"]["address"].value;

  if (degree == "Select") {
    alert("Please choose a degree.");
    return false;
  } else {
    console.log(degree);
  }

  if (field == "Select a degree type above") {
    alert("Please choose a field of study.");
    return false;
  } else {
    console.log(field);
  }

  if (firstName == "") {
    alert("Please enter a first name.");
    return false;
  } else {
    console.log(firstName);
  }

  if (lastName == "") {
    alert("Please enter a last name.");
    return false;
  } else {
    console.log(lastName);
  }

  function validateEmail(email) {
    if (email == "") {
      alert("Please enter a valid email address.");
      return false;
    } else {
      const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailFormat.test(String(email).toLowerCase());
    }
  }
  validateEmail(email);
  console.log(email);

  function validatePhone(phone) {
    if (phone == "") {
      alert("Please enter a valid phone number.");
      return false;
    } else {
      var phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      return phoneFormat.test(phone);
    }
  }
  validatePhone(phone);
  console.log(phone);

  function validateAddress(address) {
    var regex = /[,#-\/\s\!\@\$.....]/gi;
    if (regex.test(address)) {
      console.log(address);
      return true;
    } else {
      return false;
    }
  }
  validateAddress(address)
  alert("validation complete");
}
