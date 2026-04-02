document.getElementById('nextBtn').addEventListener('click', function() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    
    if(!firstname || !lastname) {
        const alert = document.getElementById('alert');
        alert.textContent = 'Please fill all required fields.';
        alert.classList.add('error');
        return;
    }
    
    document.getElementById('alert').classList.remove('error');
    document.getElementById('first-page').classList.remove('active');
    document.getElementById('second-page').classList.add('active');
});

document.getElementById('backBtn').addEventListener('click', function() {
    document.getElementById('second-page').classList.remove('active');
    document.getElementById('first-page').classList.add('active');
});

document.getElementById('registration').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;
    
    if(!email || !password || !confirm) {
        const alert = document.getElementById('alert');
        alert.textContent = 'Please fill all required fields.';
        alert.classList.add('error');
        return;
    }
    
    if(password !== confirm) {
        const alert = document.getElementById('alert');
        alert.textContent = "Passwords do not match.";
        alert.classList.add('error');
        return;
    }
    
    window.location.href = 'login.html';
});