document.addEventListener("DOMContentLoaded", function() {
    const googleSignInButton = document.getElementById("googleSignIn");
    
    googleSignInButton.addEventListener("click", function() {
        window.location.href = "signinwithgoogle.html";
    });
});
