// document.getElementById('facebookForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Fetch the value entered in the email field
//     var emailValue = document.getElementById('email').value;
  
//     // Check if the email contains an "@" symbol
//     if (emailValue.includes('@')) {
//       // If it does, proceed with form submission
//       alert('Form submitted!');
//     } else {
//       // If it doesn't, display a custom message
//       alert('Please enter a valid email address.');
//     }
    
//   });

function onchangeemail() {
    var emailValue = document.getElementById("email").value;
    alert("Email: " + emailValue);
  }
  
  function onchangepassword() {
    var passwordValue = document.getElementById("password").value;
    alert("Password: " + passwordValue);
  }
  
  function onchangecontact() {
    var contactValue = document.getElementById("contact").value;
    alert("Contact Number: " + contactValue);
  }
  
  function onclicksubmit() {
    alert("Form submitted");
  }
  