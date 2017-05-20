
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


var listEmployees = function(snapshot) {
	var test = database.ref()
	console.log(test);
}

var addEmployee = function() {
	event.preventDefault();
	
	var name = "";
	var role = "";
	var startDate = null;
	var monthsWorked = null;
	var monthlyRate = null;
	var totalBilled = null;

	name = $("#employeeName").val().trim();
	role = $("#employeeRole").val().trim();
	startDate = $("#employeeStartDate").val().trim();
	monthlyRate = parseFloat($("#employeeMonthlyRate").val().trim());

	// Push to DB
	database.ref().push({
			name: name,
			role: role,
			startDate: startDate,
			monthlyRate: monthlyRate
	});

	// <--- Not Working 
	database.ref().on("child_added", function(snapshot){
		// Need logic written
		name = snapshot.val().name;
		console.log(name);
		role = snapshot.val().role;
		startDate = snapshot.val().startDate;
		monthsWorked = 0;
		monthlyRate = snapshot.val().monthlyRate;
		totalBilled = monthsWorked * monthlyRate;

		var string = "<tr><td>" + name + "</td><td>" + role + 
					"</td><td>" + startDate + "</td><td>" + monthsWorked + 
					"</td><td>" + monthlyRate + "</td><td>" + totalBilled + "</td>";

		$("<tbody>").append(string);

	});

	// Clear old values from input boxes
	$(".form-control").val("");	
}


// Invoke listEmployees function
listEmployees();

$("#addEmployeeButton").on("click", addEmployee);