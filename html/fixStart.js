/* Aidan Le-Beard
Dr. Sarah North
CS 4720 / W01
Assignment 2, Part 1, Script 2 */

// fixStart function -- changes all subsequent appearances of the first character to "*"
function fixStart(notReplaced) { // take single string argument

  var replacedText = ""; // initialize a string to replace the text with asterisks

  if (notReplaced.length > 0) { // start if
    replacedText += notReplaced[0]; // add first character to new string
    for (let i = 1; i < notReplaced.length; i++) { // start for loop at 1, as we leave the first character
      if (notReplaced[0] == notReplaced[i]) { // add "*" to new string if not the first character and the character matches the first character
        replacedText += "*";
      } else { // else just copy the character to the new string
        replacedText += notReplaced[i];
      }
    } // end for
  } // end if 

  document.getElementById("replaced").innerHTML = replacedText; // print the replacement string

}