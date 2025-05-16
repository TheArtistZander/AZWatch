document.addEventListener("DOMContentLoaded", function() {
    // Form Validation
    function validateForm(event) {
        event.preventDefault();
        let report = document.getElementById("report").value.trim();
        let email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";

        if (report === "") {
            alert("Please provide details about the corruption you are reporting.");
            return false;
        }

        if (email !== "" && !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        alert("Report submitted successfully!");
        return true;
    }

    // Email Validation
    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Attach Form Validation to Submission
    let reportForm = document.querySelector("#report form");
    if (reportForm) {
        reportForm.addEventListener("submit", validateForm);
    }

    let contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }
});
