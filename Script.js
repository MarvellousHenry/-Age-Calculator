

function calculateAge() {
  // Get input values
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);


  // Validate inputs
  const resultElement = document.getElementById('result');
  const messages = [];

  if (!day) {
    messages.push("Day is required.");
    document.getElementById('day').textContent = "This field is required.";
  } else {
    document.getElementById('day').textContent = ""; // Clear any previous messages
  }

  if (!month) {
    messages.push("Month is required.");
    document.getElementById('month').textContent = "This field is required.";
  } else {
    document.getElementById('month').textContent = ""; // Clear any previous messages
  }

  if (!year) {
    messages.push("Year is required.");
    document.getElementById('year').textContent = "This field is required.";
  } else {
    document.getElementById('year').textContent = ""; // Clear any previous messages
  }

  if (messages.length > 0) {
    resultElement.textContent = messages.join(" ");
    return;
  }

  // If all fields are filled, clear the result message
  resultElement.textContent = "";



  if (month < 1 || month > 12) {
    document.getElementById('result').textContent = "Invalid. Enter a number between 1 and 12.";
    return;
  }
  if (month === 2 && day > 29) {
    document.getElementById('result').textContent = "Invalid. Input a value between 1 and 29.";
    return;
  }

  if (day < 1 || day > 31) {
    document.getElementById('result').textContent = "Declined. Input a value between 1 and 31.";
    return;
  }


  // Ensure the year is valid
  if (!/^\d{4}$/.test(year)) {
    document.getElementById('result').textContent = "Valid Year Required.";
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