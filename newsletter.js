// Load existing subscriptions from localStorage
const existingSubscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (email.trim() !== '') {
    // Add the new subscription to the existing list
    existingSubscriptions.push(email);
    // Save the updated list in localStorage
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(existingSubscriptions));
    alert('Subscription successful!');
    // Clear the input field
    document.getElementById('emailInput').value = '';
  } else {
    alert('Please enter a valid email address.');
  }
});

function logout() {
  // Remove user's details from localStorage
  localStorage.removeItem('loggedInUser');
  // Redirect to the login page
  window.location.href = 'login.html';
}
