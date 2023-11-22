function recordAttendance() {
    // Get the value entered in the roll number input
    const rollNumber = document.getElementById('rollNumberInput').value;

    // Check if the roll number is not empty
    if (rollNumber.trim() !== '') {
        // Check if the roll number follows the specified restrictions
        if (isValidRollNumber(rollNumber)) {
            // Redirect to the success page with a message
            window.location.href = `success.html?rollNumber=${rollNumber}`;
        } else {
            // Alert the user if the roll number is invalid
            alert('Invalid roll number. Please follow the specified restrictions.');
        }
    } else {
        // Alert the user if the roll number is empty
        alert('Please enter your roll number.');
    }
}

function isValidRollNumber(rollNumber) {
    // Check if the roll number has exactly 10 characters
    if (rollNumber.length !== 10) {
        return false;
    }

    // Check if the sixth character is an alphabet
    const sixthCharacter = rollNumber.charAt(5);
    return /^[a-zA-Z]$/.test(sixthCharacter);
}
