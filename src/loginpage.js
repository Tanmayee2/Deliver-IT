document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        // If credentials are correct, redirect or perform any action here
        alert("Login successful!");
    } else {
        // If credentials are incorrect, show error message
        document.getElementById("errorMessage").innerText = "Invalid username or password.";
    }
});

document.getElementById("googleSignIn").addEventListener("click", function() {
    // Handle sign in with Google functionality here
    alert("Sign in with Google clicked!");
});
