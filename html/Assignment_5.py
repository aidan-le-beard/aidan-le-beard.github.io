#! C:\Users\aidan\anaconda3\python.exe
# MUST INCLUDE PATH TO PYTHON EXECUTABLE TO EXECUTE PYTHON SCRIPT
# MUST BE AT VERY TOP!!

import cgi # to use cgi functionality

# store all of the "name" values submitted with the form
submittedForm = cgi.FieldStorage()

# set up the HTML of our document
print("Content-type: text/html\r\n\r\n") #\r\n\r\n for newlines
print("<!DOCTYPE html>")
print("<html>")
print("<head>")
print("  <link rel='stylesheet' href='/Assignment_2.css'>")
print("  <title>Aidan Le-Beard Assignment 5</title>")
print("</head>")
print("<body>")
print("<header>")
print("  <center>")
print("    <h1>Aidan Le-Beard's Module 5 Assignment</h1>")
print("    <a href='https://studentweb.kennesaw.edu/~alebeard/' target='_blank'>Home</a>")
print("  </center>")
print("</header>")
print("<h2>Writing to address.txt...</h2>")

# print the posted information
# default prints blank ("") if nothing submitted
print("Shipping Name: " + submittedForm.getfirst("shippingNameInput", "") + "<br />Shipping Zip Code: " 
           + submittedForm.getfirst("shippingZipInput", "") + "<br />Billing Name: " + 
           submittedForm.getfirst("billingNameInput", "") + "<br />Billing Zip Code: " + 
           submittedForm.getfirst("billingZipInput", ""))
print("<br /><br /><b>Successfully written to address.txt!</b>")

# write the posted information to address.txt
# writes blank ("") to the line if nothing submitted
file = open("address.txt", "w")
file.write("Shipping Name: " + submittedForm.getfirst("shippingNameInput", "") + "\nShipping Zip Code: " 
           + submittedForm.getfirst("shippingZipInput", "") + "\nBilling Name: " + 
           submittedForm.getfirst("billingNameInput", "") + "\nBilling Zip Code: " + 
           submittedForm.getfirst("billingZipInput", ""))

print("</body>")
print("</html>")
