//your JS code here. If required.
const input = document.getElementById('fname');

// Add an event listener to listen for input changes
input.addEventListener('input', function(event) {
  // Convert the input value to uppercase and set it back to the input field
  input.value = input.value.toUpperCase();
});


//error in one of the test  case