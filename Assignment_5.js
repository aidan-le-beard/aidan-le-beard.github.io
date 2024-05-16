/* Aidan Le-Beard
Dr. Sarah North
CS 4720 / W01
Module 5 Assignment */

/* References:
On making an event listener: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event */

// Instead of passing the value from the HTML to a function, let's try unobtrusive JavaScript:
const copyShippingInfo = document.getElementById("copyShippingInfo"); // create a variable of the HTML element

copyShippingInfo.addEventListener("change", (event) => { // create an event listener (when checkbox is changed) attached to the checkbox/HTML element

  // if the box is unchecked, clear the billing info
  if (!copyShippingInfo.checked) {
    document.getElementById("billingNameInput").value = "";
    document.getElementById("billingZipInput").value = "";

  // else if the box is checked, automatically copy the shipping info
  } else {
    copyNameText(document.getElementById("shippingNameInput").value);
    copyZipText(document.getElementById("shippingZipInput").value);
  }
});

// function that receives the shipping name value being typed
function copyNameText(shippingNameValue) { // get the shipping value being typed
  
  // only copy the text if the checkbox is checked
  if (copyShippingInfo.checked) { // if check box is checked
    document.getElementById("billingNameInput").value = shippingNameValue; // then change the billing info to the shipping value
  }
}

// function that receives the shipping zip code value being typed
function copyZipText(shippingNameValue) { // get the shipping value being typed

  // only copy the text if the checkbox is checked
  if (copyShippingInfo.checked) { // if check box is checked 
    document.getElementById("billingZipInput").value = shippingNameValue; // then change the billing info to the shipping value
  }
}