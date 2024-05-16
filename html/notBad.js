/* Aidan Le-Beard
Dr. Sarah North
CS 4720 / W01
Assignment 2, Part 1, Script 3 */

// notBad function -- if the first appearance of not and bad lead to sub string "not...bad" in that order, the substring is replaced with "good"
function notBad(input) {

  // get the indices of not and bad
  not = input.search(/not/i); // typing /not/i instead of "not" makes it case insensitive
  bad = input.search(/bad/i);

  if (not < bad && not != -1) { // if "not" index comes before "bad", and "not" and "bad" are present
    document.getElementById("wasItGood").innerHTML = input.substring(0, not) + "good" + input.substring(bad + 3, input.length); // replace the "not...bad" substring with good 
  } else { // otherwise bad comes first, or one or both are not present, so just return the original
    document.getElementById("wasItGood").innerHTML = input;
  }
  
}