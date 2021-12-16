function loader() {
  document.querySelector(".loadergif").style.display = "none";
  document.querySelector(".loadergif").style.transition = "2s";
  document.querySelector(".header").style.display = "block";
  document.querySelector(".section").style.display = "block";
}
// document.body.addEventListener(onload,loader);

function validation_contact() {
  //                 var vaEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  var username = document.getElementById("Username").value;
  var email = document.getElementById("E_Mail").value;
  var phone = document.getElementById("Phone_Number").value;
  var sujet = document.getElementById("Sujet").value;
  var message = document.getElementById("Message").value;

  if (username == "" || Username.length < 4) {
    alert("enter your nom");
    return false;
  }
  if (email == "") {
    alert("enter your Email");
    return false;
  }
  if (phone == "") {
    alert("enter your Email");
    return false;
  }
  if (Sujet == "") {
    alert("enter your Sujet");
    return false;
  }
  if (message == "" || message.length < 10) {
    alert("enter your message");
    return false;
  }

  alert(username + " " + email + " " + phone + " " + sujet + " " + message);
}

// ------------------javascript for bookin---------------------
var type,
  basePrice,
  fuel,
  tranPrice = 0,
  total;

function choix(e) {
  type = e;
  var a = document.getElementsByName("radio");
  for (var i = 0; i < a.length; i++) {
    a[i].disabled = true;
  }

  var b = document.getElementsByName("gear");
  for (var i = 0; i < b.length; i++) {
    b[i].disabled = true;
  }

  switch (type) {
    case "moto":
      document.querySelector("#essence").disabled = false;
      document.querySelector("#electrique").disabled = false;
      basePrice = 10;
      break;

    case "compact":
      document.querySelector("#manual").disabled = false;
      document.querySelector("#manual").checked = true;
      document.querySelector("#hybride").disabled = false;
      document.querySelector("#essence").disabled = false;
      document.querySelector("#diesel").disabled = false;
      basePrice = 14;
      break;

    case "citadine":
      document.querySelector("#manual").disabled = false;
      document.querySelector("#manual").checked = true;
      document.querySelector("#electrique").disabled = false;
      document.querySelector("#hybride").disabled = false;
      document.querySelector("#essence").disabled = false;
      document.querySelector("#diesel").disabled = false;
      basePrice = 12;
      break;

    case "utilitaire":
      document.querySelector("#manual").disabled = false;
      document.querySelector("#manual").checked = true;
      document.querySelector("#diesel").disabled = false;
      document.querySelector("#diesel").checked = true;
      basePrice = 16;
      break;

    case "berlin":
      document.querySelector("#automatic").disabled = false;
      document.querySelector("#automatic").checked = true;
      document.querySelector("#hybride").disabled = false;
      document.querySelector("#essence").disabled = false;
      document.querySelector("#diesel").disabled = false;
      basePrice = 20;
      tranPrice = 0.19;
      break;

    case "truck":
      document.querySelector("#automatic").disabled = false;
      document.querySelector("#automatic").checked = true;
      document.querySelector("#diesel").disabled = false;
      document.querySelector("#diesel").checked = true;
      basePrice = 250;
      tranPrice = 0.19;
      break;

    case "cm":
      document.querySelector("#manual").disabled = false;
      document.querySelector("#manual").checked = true;
      document.querySelector("#diesel").disabled = false;
      document.querySelector("#essence").disabled = false;
      basePrice = 900;
      break;
  }
}

/* fuel */
function fuelP(e) {
  fuel = e;
}

/* calcul */
function calc() {
  var days = document.querySelector("#date").value;
  total = (basePrice + basePrice * fuel + basePrice * tranPrice) * days;
  console.log("basePrice :", basePrice);
  console.log("fuel :", fuel);
  console.log("tranPrice :", tranPrice);

  alert(total);
}
