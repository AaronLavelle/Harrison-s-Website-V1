document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send the login data to your server
    console.log('Login attempt:', { username, password });
    
    // For demonstration purposes, show a success message
    alert('Login functionality will be implemented on the server side');
});
