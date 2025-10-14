const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', ()=> {
    container.classList.add('active');
})

loginBtn.addEventListener('click', ()=> {
    container.classList.remove('active');
})

 // Login password toggle
  document.getElementById('loginShow').addEventListener('change', function(){
    document.getElementById('loginPassword').type = this.checked ? 'text' : 'password';
  });

  // Register password + confirm toggle
  document.getElementById('regShow').addEventListener('change', function(){
    document.getElementById('regPassword').type = this.checked ? 'text' : 'password';
    document.getElementById('regConfirm').type = this.checked ? 'text' : 'password';
  });
