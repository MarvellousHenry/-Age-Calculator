

function calculateAge() {
  // Get input values
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  // Validate inputs
  if (!day) {
    document.getElementById('result').textContent = "Fill in this field.";
    return;
  }
  if (!month) {
    document.getElementById('result').textContent = "Fill in this field.";
    return;
  }

  if (!year) {
    document.getElementById('result').textContent = "Fill in this field.";
    return;
  }

  if (month < 1 || month > 12) {
    document.getElementById('result').textContent = "Invalid Month. Enter a number between 1 and 12.";
    return;
  }
  if (month === 2 && day > 29) {
    document.getElementById('result').textContent = "Invalid Day. Input a value between 1 and 29.";
    return;
  }

  if (day < 1 || day > 31) {
    document.getElementById('result').textContent = "Declined. Input a value between 1 and 31.";
    return;
  }
 

  // Get today's date
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Months are zero-indexed
  const currentDay = today.getDate();

  // Calculate age
  let age = currentYear - year;
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
  }

  // Display result
  document.getElementById('result').textContent = `YOU ARE ${age} YEARS OLD!`;
}