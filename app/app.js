/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}

  
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  
  let currentKey = $("#keyInput").val();
  let currentValue = $("#valueInput").val();
  // let height = document.getElementById("height").value * 2.54 ;
  // let waist = document.getElementById("waist").value * 2.54;
  // let neck = document.getElementById("neck").value * 2.54;
  // let hip = document.getElementById("hip").value * 2.54;
  let popup = document.getElementById("myPopup");

  

  $('#calculateButton').click(function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var height = document.getElementById("height").value * 2.54 ;
    var waist = document.getElementById("waist").value * 2.54;
    var neck = document.getElementById("neck").value * 2.54;
    var hip = document.getElementById("hip").value * 2.54;
    
    function genderCalc() {
      var x = document.getElementById("genderDropDown").value;
      if(x == "male"){
        bodyfat = (495 / ( 1.0324 - 0.19077 * Math.log10( Number(waist) - Number(neck) ) + 0.15456 * Math.log10( Number(height) ) ) - 450).toFixed(2);
        // alert(bodyfat);
        popup.classList.toggle("show");
      } else if (x == "female") {
        bodyfat = (495 / ( 1.29579 - 0.35004 * Math.log10( Number(waist) + Number(hip) - Number(neck) ) + 0.22100 * Math.log10( Number(height) ) ) - 450).toFixed(2);
        // alert(bodyfat);
        popup.classList.toggle("show");
      }
    }

    genderCalc();
    
    createItem(name, bodyfat);

    $("#popupName").html(name);
    $("#popupFat").html(bodyfat.toString());
  });







  $("#lookupButton").click(function () {
    console.log("working");
    const userLookUp = document.getElementById("userLookUp").value;

    if (keyExists(userLookUp)) {
      $("#lookupFat").html(getItem(userLookUp));
    }

    popup.classList.toggle("show");

    $("#popupName2").html(userLookUp);
    $("#popupFat2").html(getItem(key));
  })






  $('#deleteButton').click(function (){
    event.preventDefault();
    clearEverything();
  })

});

// create alerts when form isnt completed filled out.
  // if drop down is female, then make hip input required.
  // if drop down is male and hip input is filled, alert

// make site responsive?

//make delete button for specific key/value