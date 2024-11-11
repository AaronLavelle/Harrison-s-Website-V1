document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Gather form data
    const formData = new FormData(this);
    const projectData = {
        name: formData.get('name'),
        email: formData.get('email'),
        projectType: formData.get('projectType'),
        modelingRequirements: Array.from(document.getElementById('modelingRequirements').selectedOptions).map(option => option.value),
        dimensions: {
            length: formData.get('length'),
            width: formData.get('width'),
            height: formData.get('height'),
            unit: formData.get('unit')
        },
        deadline: formData.get('deadline'),
        description: formData.get('description')
    };

    // Basic validation
    if (!validateEmail(projectData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (projectData.description.length < 50) {
        alert('Please provide a more detailed project description (minimum 50 characters)');
        return;
    }

    // Handle file uploads
    const fileInput = document.getElementById('reference');
    const files = fileInput.files;
    if (files.length > 0) {
        const totalSize = Array.from(files).reduce((sum, file) => sum + file.size, 0);
        if (totalSize > 25 * 1024 * 1024) { // 25MB limit
            alert('Total file size should not exceed 25MB');
            return;
        }
    }

    // Here you would typically send the data to your server
    console.log('Project request:', projectData);
    
    // For demonstration purposes, show a success message
    alert('Thank you for your inquiry! We will contact you soon.');
    this.reset();
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Preview selected files (optional feature)
document.getElementById('reference').addEventListener('change', function(e) {
    const files = Array.from(this.files);
    const fileNames = files.map(file => file.name).join(', ');
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
    
    if (files.length > 0) {
        this.nextElementSibling.textContent = 
            `Selected ${files.length} file(s): ${fileNames} (Total: ${totalSizeMB}MB)`;
    }
});
