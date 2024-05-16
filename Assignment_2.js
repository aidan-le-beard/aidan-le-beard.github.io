/* Aidan Le-Beard
Dr. Sarah North
CS 4720 / W01
Module 2 Assignment, Part 2 */

// Assignment 2: Add Cell, Remove Cell, and Sort Cells Program

var cellNumber = 0; // variable to keep track of cell/div numbers in names
var divsArray = []; // array to hold the newly created cells (div elements)
const removedDivs = []; // array to hold removed divs/remember entered string "as a convenience to the user"

// class to create a new cell (div)
class Divs {
  /* constructor makes a new div, a new input text box (cell), and a new label that displays the character count, 
  then returns the div. IDs are also created and attached */
  constructor() {
    this.label = document.createElement("label");
    this.label.innerHTML = " Length: 0";
    this.label.setAttribute("id", "label" + cellNumber);
    this.textBox = document.createElement("input");
    this.textBox.setAttribute("type", "text");
    this.textBox.setAttribute("id", "textbox" + cellNumber);
    // use onkeyup for real-time updating
    this.textBox.setAttribute("oninput", "return charCount(document.getElementById('" + this.label.id + "'), document.getElementById('" + this.textBox.id + "').value)");
    this.div = document.createElement("div");
    this.div.setAttribute("id", "div" + cellNumber);
    this.div.append(this.textBox, this.label);
    cellNumber++;
  }
}

/* function that makes the call to Divs() to make a new div/cell/textbox, appends it to the HTML, and pushes it to the array.
   if a cell has been removed, it is added back, instead. */
function addCell() {
  if (removedDivs.length > 0) {
    document.getElementById("addRemoveCells").appendChild(removedDivs[removedDivs.length - 1].div);
    divsArray.push(removedDivs.pop());
  } else {
      let myDiv = new Divs(); // create new cell
      document.getElementById("addRemoveCells").appendChild(myDiv.div); // append to HTML addRemoveCells div
      divsArray.push(myDiv); // add to div array
  }
  return false; // return false so page doesn't refresh
}

// function to remove a cell
function removeCell() {
  if (document.getElementById("addRemoveCells").children.length > 1) { // we want to keep at least 1 cell, so set to 1
    document.getElementById("addRemoveCells").removeChild(document.getElementById("addRemoveCells").lastChild); // remove the div at the bottom
    removedDivs.push(divsArray.pop()); // pop the div from the array so it does not get sorted, and store for later in removedDivs array
  }
  return false; // return false so page doesn't refresh
}

// sort all the text boxes by text length. Sorts from (highest --> lowest), as shown in the Assignment 2 PDF
function sortDivs() {
  let divsArray2 = []; // a second array to hold the sorted divs
  // the loop finds the highest number and adds the div to divsArray2 first
  for (let i = 0; i < document.getElementById("addRemoveCells").children.length; i++) {
    let compare = document.getElementById(divsArray[0].textBox.id).value.length; // the first div length value
    let index = 0; // set to starting index
    for (let j = 1; j < divsArray.length; j++) { // start at 1 and compare all lengths with index[0] to find the longest
      if (document.getElementById(divsArray[j].textBox.id).value.length > compare) { /* this can be changed
      from "highest to lowest" sort to "lowest to highest" sort by changing ">" to "<" instead */
        compare = document.getElementById(divsArray[j].textBox.id).value.length; // change compare to the highest value as needed
        index = j; // change index if a higher length is found
      }
    }
    divsArray2.push(divsArray[index]); // push longest div to divsArray2
    divsArray.splice(index, 1); // remove the div from divsArray
  }

  divsArray = divsArray2; // divsArray is empty, and divsArray2 is sorted, so set divsArray to divsArray2
  document.getElementById("addRemoveCells").innerHTML=""; // clear the old unsorted divs from the HTML
  
  // loop to replace the divs, now in sorted order
  for (let i = 0; i < divsArray.length; i++) {
    document.getElementById("addRemoveCells").appendChild(divsArray[i].div); // append to HTML addRemoveCells div
  }
  return false; // return false so the webpage doesn't refresh
}

// counts the number of characters in the text box and changes the label value to display the length
function charCount(label, textBoxValue) {
  label.innerHTML = " Length: " + textBoxValue.length; // change the label to the reading of the text box length
}