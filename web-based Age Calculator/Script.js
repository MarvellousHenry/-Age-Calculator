function calculateAge() {
    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validate inputs
    if (!day || !month || !year) {
      document.getElementById('result').textContent = "Please fill in all fields.";
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