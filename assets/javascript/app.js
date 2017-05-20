
// Initialize Firebase
 var config = {
   apiKey: "AIzaSyCcWPNdBwAMoQvNAa-KmdNIW0DPiqxEo08",
   authDomain: "apikey-f486d.firebaseapp.com",
   databaseURL: "https://apikey-f486d.firebaseio.com",
   projectId: "apikey-f486d",
   storageBucket: "apikey-f486d.appspot.com",
   messagingSenderId: "828954890729"
 };

 firebase.initializeApp(config);

 var database = firebase.database();



var addEmployee = function() {
	
}


 $("#addEmployeeButton").on("click", addEmployee());