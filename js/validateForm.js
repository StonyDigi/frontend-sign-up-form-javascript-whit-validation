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

        const resetButton = document.querySelector(".btn-reset");
        resetButton.addEventListener("click", function() {
        form.classList.remove("was-validated");
        });

        
        form.addEventListener("submit", function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett űrlap beküldését
  
        // Adatok elküldése az actions attribútumban megadott weboldalra
        window.location.href = form.action;
        });
    }

    /**
 * Egyedi JS kód
 * @author Somossy László
*/