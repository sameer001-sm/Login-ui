// 1. Show/Hide Password Toggle
document.getElementById('togglePass')?.addEventListener('click', function(){
  let pass = document.getElementById('loginPassword');
  let icon = this.querySelector('i');
  if(pass.type === 'password'){
    pass.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    pass.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
});

// 2. Login Form Validation
document.getElementById('loginForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  let email = document.getElementById('loginEmail').value;
  let emailError = document.getElementById('emailError');
  
  emailError.innerText = "";
  
  if(!email.includes('@') || !email.includes('.')){
    emailError.innerText = "Please enter a valid email";
    return;
  }
  alert("Login Successful! ✅");
});

// Show/Hide Password
const togglePass = document.getElementById('togglePass');
const loginPassword = document.getElementById('loginPassword');

togglePass.addEventListener('click', function () {
  const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  loginPassword.setAttribute('type', type);
  this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Login Form Validation
const loginForm = document.querySelector('form');
const email = document.getElementById('loginEmail'); // id add karna padega
const password = document.getElementById('loginPassword');

if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    let valid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Email check
    if(email.value.trim() === ""){
      alert("Email khali nahi ho sakta");
      valid = false;
    } else if(!emailPattern.test(email.value)){
      alert("Sahi email daalo");
      valid = false;
    }
    
    // Password check
    if(password.value.length < 6){
      alert("Password kam se kam 6 characters ka ho");
      valid = false;
    }
    
    if(valid){
      alert("Login Successful! Dummy");
      // yaha tum window.location = "dashboard.html" kar sakte ho
    }
  });
}

// Register Form Validation
const regForm = document.getElementById('registerForm');

if(regForm){
  regForm.addEventListener('submit', function(e){
    e.preventDefault();
    const pass = document.getElementById('regPass').value;
    const confirm = document.getElementById('regConfirm').value;
    
    if(pass !== confirm){
      alert("Password match nahi kar raha");
    } else if(pass.length < 6){
      alert("Password kam se kam 6 characters ka ho");
    } else {
      alert("Register Successful! Dummy");
    }
  });
}

// 4. AJAX Dummy Email Check
const regEmail = document.getElementById('regEmail');

if(regEmail){
  regEmail.addEventListener('blur', function(){
    let email = this.value;
    // Dummy check: agar email me "test" hai to error
    if(email.includes("test")){
      alert("Ye email pehle se register hai!");
      this.classList.add('is-invalid');
    } else {
      this.classList.remove('is-invalid');
    }
  });
}