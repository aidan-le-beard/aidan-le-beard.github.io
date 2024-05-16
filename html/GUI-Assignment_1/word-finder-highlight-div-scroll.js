// create a dictionary object
var dict = new Dictionary(words);

// add an event listener to update the list as the search box is typed in
// using "input" makes it so we don't have to use "keyup" AND "search". automatically changes as letters are typed
// keyup didn't change on clicking the "x" in the search box.
// we don't need to create variables for the elements, as the JS code can see their ID in the HTML and use them:
searchBox.addEventListener("input", (event) => {
  iterateSearch();
});

// add an event listener to the Clear button being clicked that clears the searchBox
clearButton.addEventListener("click", (event) => {
  searchBox.value = ""; // clear the searchBox text
  iterateSearch(); // repopulate the options
});

// when the window is resized, the % of the search box is changed. Update the Select box to match:
addEventListener("resize", (event) => {
  searchBox.style.width = "40%";
  selectOptions.style.width = searchBox.offsetWidth + "px"; // searchBox uses %, so measure using offsetWidth, and append "px"
});

// use lazy loading to load more options while scrolling 
selectOptions.addEventListener("scroll", (event) => {
  // finds the scroll bar height by using scroll height - client height. then dynamically loads 30 more elements if 
  // the scroll bar is scrolled down 90% or more.
  if (selectOptions.scrollTop >= (selectOptions.scrollHeight - selectOptions.clientHeight) * 0.9) {
    count = selectOptions.children.length; // stores the number of options already created
    for (let i = 0; i < dict.search(searchBox.value).length; i++) { // loop through whole searched array
      if (i == 30 || selectOptions.children.length == dict.search(searchBox.value).length) {
        break;
      }
      // call function to create an option and add it to Select. count being added allows next ~30 options to be added dynamically
      fillOptions(dict.search(searchBox.value)[i + count]); 
      }
  } 
});

// create an observer to change the search box width to update when the select box width is changed
function resizeSearchBox() {
  searchBox.style.width = selectOptions.offsetWidth + "px";
}
new ResizeObserver(resizeSearchBox).observe(selectOptions);

// call iterateSearch initially for the blank value in the search box at the beginning
selectOptions.style.width = searchBox.offsetWidth + "px";
iterateSearch();

// loop through the searched array and create each word as an option by calling fillOptions()
function iterateSearch() {

  selectOptions.innerHTML = ""; // clear all options

  // update the label to say how many words the search found
  if (searchBox.value.length == 0) {
    selectBoxLabel.innerHTML = dict.size() + " words total"; // write X words total if the search box is blank
  } else if (dict.search(searchBox.value).length == 1) { 
    selectBoxLabel.innerHTML = dict.search(searchBox.value).length + " word containing '" + searchBox.value + "'";
  } else { // else write how many words contain the searched value
    selectBoxLabel.innerHTML = dict.search(searchBox.value).length + " words containing '" + searchBox.value + "'";
  }

  for (let i = 0; i < dict.search(searchBox.value).length; i++) { // loop through whole searched array
    // using lazy loading, so break after 30 options are added
    if (i == 30) {
      break;
    }
    fillOptions(dict.search(searchBox.value)[i]); // call function to create an option and add it to Select
  }

}

// function creates a word as an option and adds it to the "select" list
function fillOptions(searchedWord) { // searched word is the returned word from the list
  let option = document.createElement("div"); // create an option (div for highlighting, now that we've gotten rid of Select)
  searchBoxValue = searchBox.value.replace(/#|_| /g, '.'); // replace '#', '_', ' ' with wildcard character '.'
  searchBoxValue = new RegExp(searchBoxValue, "i"); // make a case insensitive RegExp

  // recreate the string, putting <mark> tags before and after the index that is matching:
  searchedWord = searchedWord.substring(0, searchedWord.match(searchBoxValue).index) + "<mark>" + 
    searchedWord.substring(searchedWord.match(searchBoxValue).index, searchedWord.match(searchBoxValue).index + searchBox.value.length) 
    + "</mark>" + searchedWord.substring(searchedWord.match(searchBoxValue).index + searchBox.value.length);
  option.innerHTML = searchedWord; // change the inner HTML to be the now highlighted word
  selectOptions.append(option); // add the option to the select box by appending it
}