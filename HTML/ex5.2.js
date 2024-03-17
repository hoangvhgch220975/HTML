// Listen for checkbox change events
document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        updateSelectedOptions();
    });
});

// Update the content of the selection display element
function updateSelectedOptions() {
    var selectedOptions = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
        selectedOptions.push(checkbox.value);
    });

    var displayText = selectedOptions.join(", ");
    document.getElementById('selectedText').textContent = displayText;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the checked state of each checkbox
    var HealthValue = document.getElementById("checkbox_health").checked;
    var WealthValue = document.getElementById("checkbox_wealth").checked;
    var HappinessValue = document.getElementById("checkbox_happiness").checked;

    if (!HealthValue && !WealthValue && !HappinessValue) {
        alert('Please choose at least one');
    } else {
        alert('Successful');
    }
});
