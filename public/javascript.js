M.AutoInit();

var addressValidator = require("address-validator");
var _ = require("underscore");

function validateForm() {
  var firstName = document.forms["contactInputs"]["first_name"].value;
  var lastName = document.forms["contactInputs"]["last_name"].value;
  var email = document.forms["contactInputs"]["email"].value;
  var phone = document.forms["contactInputs"]["phone"].value;
  var address = document.forms["contactInputs"]["address"].value;

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

  addressValidator.validate(
    address,
    addressValidator.match.streetAddress,
    function(err, exact, inexact) {
      console.log("input: ", address.toString());
      console.log(
        "match: ",
        _.map(exact, function(a) {
          return a.toString();
        })
      );
      console.log(
        "did you mean: ",
        _.map(inexact, function(a) {
          return a.toString();
        })
      );
    }
  );
  console.log(address);
  alert("validation complete");
}
