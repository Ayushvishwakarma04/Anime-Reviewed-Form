document.addEventListener("DOMContentLoaded", function() {
  const submitBtn = document.getElementById("Submit");
  const myLink = document.getElementById("Submit");

  
  // Add a click event listener to the custom submit button
  submitBtn.addEventListener("click", function() {
    // Get the form element by its ID
    const myForm = document.getElementById("form");

    // Manually trigger form validation using checkValidity()
    if (myForm.checkValidity()) {
      // If the form is valid, submit it
      myForm.submit();
    } else {
      // If the form is not valid, display an error message or take appropriate action
      alert("Please fill in all required fields.");
    }
  });

  const googleAuth = new google.auth.OAuth2Client();
  function signIn() {
    googleAuth.init({
      clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      clientSecret: 'YOUR_CLIENT_SECRET',
      scope: 'https://www.googleapis.com/auth/userinfo.email'
    }).then(function () {
      return googleAuth.signIn();
    }).then(function (response) {
      // Handle successful sign-in
      console.log(response.accessToken); // Access token for API calls
    }).catch(function (error) {
      // Handle sign-in errors
      console.error(error);
    });
  }
  
  function signOut() {
    googleAuth.signOut().then(function () {
      // Handle sign-out
    });
  }

  
  // Add a click event listener to the link
  myLink.addEventListener("click", function(event) {
    // Prevent the default link behavior (preventing it from navigating to "#")
    event.preventDefault();

    // Check if the form is valid before navigating to the next page
    const myForm = document.getElementById("form");
    if (myForm.checkValidity()) {
      // If the form is valid, navigate to the desired URL
      window.location.href = "file:///C:/Users/HP/Documents/Web%20Devlopment/Project/Anime%20review%20site/Anime_Review_Form/Thank%20You.html";
    } else {
      // If the form is not valid, display an error message or take appropriate action
      alert("Please fill in all required fields.");
    }
  });
});

  
