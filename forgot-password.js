document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically send the email to your server
    console.log('Password reset requested for:', email);
    
    // For demonstration purposes, show a success message
    alert('If an account exists with this email, you will receive password reset instructions.');
    
    // Optionally redirect to login page after a few seconds
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 3000);
}); 