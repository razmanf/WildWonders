function login() {
    return {
      username: '',
      password: '',
      authenticate() {
        if (!this.$refs.loginForm.checkValidity()) {
          // Form is not valid, do not proceed with authentication
          return;
        }
  
        fetch('users.json')
          .then(response => response.json())
          .then(data => {
            const user = data.users.find(u => u.username === this.username && u.password === this.password);
            if (user) {
              // Successfully authenticated, store login details in localStorage
              localStorage.setItem('loggedInUser', JSON.stringify(user));
              // Redirect to dashboard (index.html)
              redirectToDashboard();
            } else {
              console.log('Invalid username or password');
              // Handle invalid credentials
            }
          })
          .catch(error => {
            console.error('Error:', error);
            // Handle error
          });
      }
    }
  }
  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
    // User is logged in, redirect to dashboard (index.html)
    redirectToDashboard();
  }
  
  function redirectToDashboard() {
    // Redirect to dashboard (index.html)
    window.location.href = 'index.html';
  }  