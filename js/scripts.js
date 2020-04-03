function roboTalk(userInput) {
    var number = [];
for (var i = 0; i <= userInput; i++) {
  if (i.toString().includes("3")) {
    number.push("Won't you be my neighbor?")
      }else if (i.toString().includes("2")) {
        number.push("Boop!")
      }else if (i.toString().includes("1")) {
        console.log(i);
        number.push("Beep!")
      }else {
        number.push (" " + i)
      }
       
    }  
    return number;
} 











$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
     var userInput = parseInt($("input#userInput").val())
     var output = roboTalk(userInput)
     if (output) {
      $(".output").text(output);
     }
    });  
  });


    



























// zero rule program will return a range of numbers from 0 to the users input number.
// first rule numbers that contain a 1 all digits are replaced with the string "Beep!"
// second rule numbers that contain a 2 all digits are replaced with the string "Boop!"
// thrid rule numbers that contain a 3 all digits are replaced with the string "Won't you be my neighbor?"
// fourth rule if a user inputs a number that contains both 1 & 2 the program will execute rule two, if a user inputs a number that contains 1,2 & 3 the program will execute rule 3. 