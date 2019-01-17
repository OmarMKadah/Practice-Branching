$(document).ready(function() {
  var age = confirm("Are you of age?");

  if ( age >= 18) {
    $('#ofAge').show();
  } else {
    $('#underAge').show();
  }
});
