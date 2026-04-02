document.getElementById('log-ins').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('alert');
    
    if (!email || !password) {
        alertBox.textContent = 'Please fill all required fields.';
        alertBox.classList.add('error');
        return;
    }
    
    alertBox.classList.remove('error');
    window.location.href = 'dashboard.html';
});