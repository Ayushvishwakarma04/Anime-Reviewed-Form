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
      clientId: '285670484684-pl526ftm74kvc5vdu6t40gbht6p6lufl.apps.googleusercontent.com',
      clientSecret: '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',
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
  function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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

  
