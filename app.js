

const { createClient } = supabase
const supabaseUrl = 'https://bipavizpmdmoosmadoad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcGF2aXpwbWRtb29zbWFkb2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMTAxNjIsImV4cCI6MjAxNjU4NjE2Mn0.XbH59yYsIaNH-5A0Q0meAXTZYav9NWir6br-3yfzaXI';
const _supabase = createClient(supabaseUrl, supabaseKey);

async function recordAttendance() {
    const roll = document.getElementById('rollNumberInput').value;
    if (roll.trim() !== '') {

        if (isValidRollNumber(roll)) {
            try {
                const { error } = await _supabase.from('attendance') .insert({rollnumber: roll});

                if (error) {
                    console.error('Error inserting data:', error.message);
                    alert('Error recording attendance. Please try again.');
                } else {
                    window.location.href = `success.html?rollNumber=${roll}`;
                }
            } catch (error) {
                console.error('Error:', error.message);
                alert('Error recording attendance. Please try again.');
            }
        } else {
            alert('Invalid roll number. Please follow the specified restrictions.');
        }
    } else {
        alert('Please enter your roll number.');
    }
}

function isValidRollNumber(rollNumber) {
    if (rollNumber.length !== 10) {
        return false;
    }

    const sixthCharacter = rollNumber.charAt(5);
    return /^[a-zA-Z]$/.test(sixthCharacter);
}
