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