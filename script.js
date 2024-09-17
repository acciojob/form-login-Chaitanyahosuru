function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the form element
    var form = document.getElementById('form1');
    
    // Extract the first and last name values
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;
    
    // Create the full name string
    var fullName = firstName + ' ' + lastName;
    
    // Display the full name in an alert
    alert(fullName);
}
