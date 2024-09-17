function getFormvalue() {
    //Write your code here
	var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    
    // Create the full name string
    var fullName = firstName + ' ' + lastName;
    
    // Display the full name in an alert
    alert(fullName);

}
