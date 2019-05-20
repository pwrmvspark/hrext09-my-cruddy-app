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


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  
  var currentKey = $("#keyInput").val();
  var currentValue = $("#valueInput").val();
  
  

  $('#calculateButton').click(function(event) {
    event.preventDefault();

    var height = document.getElementById("height").value * 2.54 ;
    var waist = document.getElementById("waist").value * 2.54;
    var neck = document.getElementById("neck").value * 2.54;

    function genderCalc() {
      var x = document.getElementById("genderDropDown").value;
      // console.log(x)
      if(x == "male"){
        //alert(Number(height) + Number(waist) + Number(neck));
        alert(495 / ( 1.0324 - 0.19077 * Math.log10( Number(waist) - Number(neck) ) + 0.15456 * Math.log10( Number(height) ) ) - 450);
      } else if (x == "female") {
        alert( 495 / ( 1.29579 - 0.35004 * Math.log10( waist + hip - neck ) + 0.22100 * Math.log10( height ) ) - 450)
      }
    }

    genderCalc();
      
      //   if (document.getElementsByClassName("genderDropDown") === "male") {
      //     alert("male yo!");
      //   }

      //   // if (option value === female) {
      //   //   return female calculation;
      //   // }

      //   if (keyExists(currentKey)) {
      //     //current key exists, do something error-handle-y
      //   } else {
      //     createItem(currentKey, currentValue);
      //   }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    
  
    // if (keyExists(currentKey)) {
    //   updateItem(currentKey, currentValue);
    // } else {
    //   //current key doesnt exist, do stuff
    // }
  });

  $('#deleteButton').click(function (){
    event.preventDefault();
    clearEverything();
  })
});
