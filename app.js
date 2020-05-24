// Listen for submit

document.getElementById('temp-form').addEventListener('submit', function (e) {
  // Hide Result
  document.getElementById('result').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(convertTemp, 2000);

  e.preventDefault();
});

// Convert Temp
function convertTemp() {
  // UI Vars
  const UIcelsius = document.getElementById('celsius');
  const UIfahrenheit = document.getElementById('fahrenheit');
  const UItemperature = document.getElementById('temperature');

  const celsius = parseFloat(UIcelsius.value);
  const fahrenheit = parseFloat(UIfahrenheit.value);

  // Convert Celsius to Fahrenheit
  const celToFah = celsius * (9 / 5) + 32;

  // Convert Fahrenheitj to Celsius
  const fahToCel = (fahrenheit - 32) * (5 / 9);

  if (isFinite(celsius)) {
    UItemperature.value = celToFah.toFixed(2);

    // Show result
    document.getElementById('result').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else if (isFinite(fahrenheit)) {
    UItemperature.value = fahToCel.toFixed(2);

    // Show result
    document.getElementById('result').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please Enter A Temperature');
  }

  // e.preventDefault();
}

function showError(error) {
  // Hide result
  document.getElementById('result').style.display = 'none';

  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create element for error
  const errorDiv = document.createElement('div');
  // Add class
  errorDiv.className = 'alert alert-danger';
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error msg after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}
