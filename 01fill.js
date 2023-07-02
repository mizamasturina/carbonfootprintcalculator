function addData() {
  // Retrieve data
  var first = document.getElementById('firstname').value;
  var last = document.getElementById('lastname').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;

  // Create an object with the data
  var userData = {
    firstName: first,
    lastName: last,
    city: city,
    state: state
  };

  // Display the user data in the console
  console.log('User Data:', userData);
  localStorage.clear();
  localStorage.setItem("userData", JSON.stringify(userData));
  alert('Redirect to landing page');
  window.location.href="02landingpage.html";

}


  // Make a POST request to the API endpoint

//   fetch('https://api.example.com/saveUserData', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userData)
//   })
//     .then(response => {
//       if (response.ok) {
//         console.log('Data saved successfully!');
//         // Redirect the user to the next page or perform any other actions
//       } else {
//         console.log('Failed to save data!');
//       }
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
// }
