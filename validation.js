function recordAttendance() {
    // Get the value entered in the rollNumberInput field
    var rollNumber = document.getElementById("rollNumberInput").value;

    // Check if the roll number has the required length
    if (rollNumber.length === 10) {
        // Perform actions with the valid roll number
        console.log("Attendance recorded for roll number: " + rollNumber);

        // You can add more logic or make AJAX requests here as needed
    } else {
        // Display an error message or take appropriate action for invalid length
        alert("Invalid roll number length. Please enter a 10-character roll number.");
    }
}
