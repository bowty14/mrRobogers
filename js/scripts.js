$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = paseInt($("input#userInput").val())
  })
});