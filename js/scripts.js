function roboTalk(userInput)

for (var index = 0; index <= number; index += 1) {
  console.log(index);
  $(".output").text(index)
}








$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
     var number = parseInt($("input#userInput").val())
      })  
    });


    



























// zero rule program will return a range of numbers from 0 to the users input number.
// first rule numbers that contain a 1 all digits are replaced with the string "Beep!"
// second rule numbers that contain a 2 all digits are replaced with the string "Boop!"
// thrid rule numbers that contain a 3 all digits are replaced with the string "Won't you be my neighbor?"
// fourth rule if a user inputs a number that contains both 1 & 2 the program will execute rule two, if a user inputs a number that contains 1,2 & 3 the program will execute rule 3. 