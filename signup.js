document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }

    // Here you would typically send the registration data to your server
    console.log('Registration attempt:', { 
        fullName, 
        email, 
        username, 
        password 
    });
    
    // For demonstration purposes, show a success message
    alert('Registration successful! (This is just a demo)');
}); 