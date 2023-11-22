function recordAttendance() {
    const rollNumber = document.getElementById('rollNumberInput').value;

    if (rollNumber.trim() !== '') {
        if (isValidRollNumber(rollNumber)) {
            // Prepare data to send to the server
            const data = {
                rollNumber: rollNumber,
                timestamp: new Date().toISOString(),
            };

            // Send data to the server using an AJAX request
            fetch('http://localhost:3000/record-attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to the success page with a message
                    window.location.href = `success.html?rollNumber=${rollNumber}`;
                } else {
                    throw new Error('Failed to record attendance. Please try again.');
                }
            })
            .catch(error => {
                alert(error.message);
            });
        } else {
            alert('Invalid roll number. Please follow the specified restrictions.');
        }
    } else {
        alert('Please enter your roll number.');
    }
}
