const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
            validateForm();
        }
        form.classList.add("was-validated");
    });

    function validateForm() {
        const inputs = form.querySelectorAll(".form-control");
        const errorMessages = {
            username: "Username is required.",
            firstname: "Firstname is required.",
            lastname: "Lastname is required.",
            email: "Email address is required.",
            "profile-image": "Profile image is required.",
            password: "Password is required.",
            "confirm-password": "Password confirmation is required.",
            gdpr: "You must accept GDPR.",
            aszf: "You must accept ASZF."
        };

        inputs.forEach(function(input) {
            const inputId = input.id;
            const errorId = inputId + "-error";
            const errorMessage = errorMessages[inputId];

            if (input.checkValidity()) {
                document.getElementById(errorId).textContent = "";
            } else {
                document.getElementById(errorId).textContent = errorMessage;
            }
        });
    }