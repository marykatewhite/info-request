M.AutoInit();

var instance = M.FormSelect.getInstance(elem);

function validateForm() {
  var firstName = document.forms["contactInputs"]["first_name"].value;
  var lastName = document.forms["contactInputs"]["last_name"].value;
  var email = document.forms["contactInputs"]["email"].value;
  var phone = document.forms["contactInputs"]["phone"].value;
  var address = document.forms["contactInputs"]["address"].value;

  if (firstName == "") {
    alert("Please enter a first name.");
    return false;
  }

  if (lastName == "") {
    alert("Please enter a last name.");
    return false;
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

  function validatePhone(phone) {
    var phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneFormat.test(phone);
  }
  validatePhone(phone);

  function validateAddress(address) {
    var addressFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return addressFormat.test(address);
  }
  validateAddress(address);

  //   alert("validation complete");
}

//degreeType
//select

//studyField
//select

//first_name X
//text

//last_name X
//text

//email X
//email

//phone X
//tel

//address X
//text
