$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    
    var number = $("input#userInput").val()
    var display = [""]
    for(var index = 0; index <= number; index += 1) {
      console.log(index);
      //alert(index);
      display.push(index);
      $(".output").text(display)
    }
      
      display.forEach(function(display) {
        var greeting1 = (display.replace("1", "Beep!"))
        $(".output").text(greeting1);
      })

      // if (isNaN(number)) {
      //   $(".output").text("Please enter a number")
      // } else if (number  "1") {
      //   $(".output").text(greeting)
      // }


      })  
    });


    



























// zero rule program will return a range of numbers from 0 to the users input number.
// first rule numbers that contain a 1 all digits are replaced with the string "Beep!"
// second rule numbers that contain a 2 all digits are replaced with the string "Boop!"
// thrid rule numbers that contain a 3 all digits are replaced with the string "Won't you be my neighbor?"
// fourth rule if a user inputs a number that contains both 1 & 2 the program will execute rule two, if a user inputs a number that contains 1,2 & 3 the program will execute rule 3. 