function getFormvalue(e) {
    e.preventDefault();
    const form = document.getElementById('form1');
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();
    const fullName = `${firstName} ${lastName}`;
    alert(fullName);
}