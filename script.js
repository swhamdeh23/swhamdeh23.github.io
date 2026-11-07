function validateForm() {
    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var country = document.getElementById("country").value.trim();
    var comments = document.getElementById("comments").value.trim();

    // Check that all fields are filled in
    if (name === "" || email === "" || country === "" || comments === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }

    // Simple email check
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you! Your message was sent successfully.");
    document.getElementById("contactForm").reset();
    return false; // stay on the page (no server to send to)
}

