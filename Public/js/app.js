var firebaseConfig = {
    apiKey: "AIzaSyA2YxvoJ2KVb2ZpiCy0nCVk7PNbgXQ294Q",
    authDomain: "mywallpaper-e49da.firebaseapp.com",
    databaseURL: "https://mywallpaper-e49da.firebaseio.com",
    projectId: "mywallpaper-e49da",
    storageBucket: "mywallpaper-e49da.appspot.com",
    messagingSenderId: "283946723838",
    appId: "1:283946723838:web:a5776be355cc9fe97d78af",
    measurementId: "G-75C0BX7NFQ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL; 

  $("#btn-login").click(function(){
      
      var email = $("#email").val();
      var password = $("#password").val(); 

      var result = firebase.auth().signInWithEmailAndPassword(email, password);
  
      result.catch(function(error){
          var errorCode = error.code; 
          var errorMessage = error.message; 

          console.log(errorCode);
          console.log(errorMessage);
      });

  });

  $("#btn-logout").click(function(){
      firebase.auth().signOut();
  });

  function switchView(view){
      $.get({
          url:view,
          cache: false,  
      }).then(function(data){
          $("#container").html(data);
      });
  }