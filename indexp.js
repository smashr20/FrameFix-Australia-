document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const country = document.getElementById('country').value;
    const responce = document.getElementById('dispalyMessage');

    if (name === '' || lname === '' || country === '') {
        responce.textContent = 'All fields are required.';
        responce.style.color = 'red';
        return;
    }

    /*if (!validateEmail(email)) {
         responseMessage.textContent = 'Please enter a valid email address.';
         responseMessage.style.color = 'red';
         return;
     }
 */
    // Here you can handle the form submission, e.g., send the data to a server
    responce.textContent = 'Thank you for your message!';
    responce.style.color = 'green';

    // Reset the form
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}