M.AutoInit();

var studies = $("#studyField option").clone();

$(document).ready(function() {
  $("#studyField").formSelect();

  $("#degreeType").change(function() {
    $("#studyField").formSelect("destroy");
    $("#studyField option").remove();
    $("#studyField").append(studies.filter("." + this.value));
    $("#studyField").formSelect();
  });
});

function validateForm() {
  var formResults = {};

  var degree =
    document.forms["contactInputs"]["degreeType"][
      document.forms["contactInputs"]["degreeType"].selectedIndex
    ].text;
  var field =
    document.forms["contactInputs"]["studyField"][
      document.forms["contactInputs"]["studyField"].selectedIndex
    ].text;
  var firstName = document.forms["contactInputs"]["first_name"].value;
  var lastName = document.forms["contactInputs"]["last_name"].value;
  var email = document.forms["contactInputs"]["email"].value;
  var phone = document.forms["contactInputs"]["phone"].value;
  var address = document.forms["contactInputs"]["address"].value;

  if (degree == "Select") {
    alert("Please choose a degree.");
    return false;
  }

  if (field == "Select a degree type above") {
    alert("Please choose a field of study.");
    return false;
  }

  if (firstName == "") {
    alert("Please enter a first name.");
    return false;
  }

  if (lastName == "") {
    alert("Please enter a last name.");
    return false;
  }

  function validateEmail(email) {
    var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "" || email == "undefined") {
      alert("Please enter a valid email address.");
      return false;
    } else if (email.match(emailFormat)) {
      return true
    } else {
      alert("Please enter a valid email address.");
      return false;
    }
  }
  validateEmail(email);
  console.log(email);

  function validatePhone(phone) {
    var phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (phone == "" || phone == "undefined") {
      alert("Please enter a valid phone number.");
      return false;
    } else if (phone.match(phoneFormat)) {
      {
        return true;
      }
    } else {
      alert("Please enter a valid phone number.");
      return false;
    }
  }
  validatePhone(phone);

  formResults = {
    degree: degree,
    field: field,
    name: firstName + " " + lastName,
    email: email,
    telephone: phone,
    address: address
  };

  console.log(formResults);

  alert("validation complete");
}
