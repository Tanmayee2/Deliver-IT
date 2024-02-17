const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector("#sign-in-form");
    const signUpForm = document.querySelector("#sign-up-form");

    // Handle Sign In
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        const username = document.querySelector("#login-username").value;
        const password = document.querySelector("#login-password").value;

        // Store credentials (for demonstration only; not secure)
        localStorage.setItem('loginUsername', username);
        localStorage.setItem('loginPassword', password);

        // Implement your login logic here
        console.log("Logged In:", username, password);
    });

    // Handle Sign Up
    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        const username = document.querySelector("#signup-username").value;
        const password = document.querySelector("#signup-password").value;

        // Store credentials (for demonstration only; not secure)
        localStorage.setItem('signupUsername', username);
        localStorage.setItem('signupPassword', password);

        // Implement your sign-up logic here
        console.log("Signed Up:", username, password);
    });
});
