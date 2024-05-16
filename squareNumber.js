/* Aidan Le-Beard
Dr. Sarah North
CS 4720 / W01
Assignment 2, Part 1, Script 1 */

// squareNumber function -- squares the input it receives
function squareNumber(input) { // function takes an argument
  /* We named the paragraph <p> resultOfSquare, so we get the Element,
     and set it equal to the value that is being typed in the text box, toBeSquared
  */
  document.getElementById("resultOfSquare").innerHTML = "The result of squaring the number " + input + " is " + (input * input) + ".";
}