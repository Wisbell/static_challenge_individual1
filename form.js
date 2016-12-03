/*
Challenge #1

Create a form that has a range input, and a number input, both with
the same values for min, max, and default. When the user changes the
 value on the range input, the value of the number input should
 match. The opposite should be true. The values of the two inputs
 should always be synchronized.
*/


console.log("Form.js loaded");


// Capture input elements

var number_input_field = document.querySelector('input[name=number_input]');

var range_input_field = document.querySelector('input[name=range_input]');

//console.log(number_input_field);

//console.log(range_input_field);


/*-------------------------------*/
/* Add Event Listeners to inputs */
/*-------------------------------*/

// https://developer.mozilla.org/en-US/docs/Web/Events/input

// Add event listener to range_input

range_input_field.addEventListener('input', function(){
    console.log("Range input changed");

    number_input_field.value = range_input_field.value;
});


// Add event listener to number_input

number_input_field.addEventListener('input', function(){
    console.log("Number input changed");
    range_input_field.value = number_input_field.value;
});
