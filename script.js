function formatDate(date) {
    var today = new Date();
    var day = ('0' + today.getDate()).slice(-2); // Add leading zero if necessary
    var month = ('0' + (today.getMonth() + 1)).slice(-2); // Add leading zero if necessary, month is 0-indexed
    var year = today.getFullYear().toString().substr(-2); // Get the last two digits of the year

    return month + '/' + day + '/' + year; // returns MM/DD/YY format
  }

  document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    document.getElementById('date').textContent = formatDate(currentDate);
        // URL where the CSV file is accessible


        fetch('/Users/Kyle/Desktop/GITHUB/HRR-WEBSITE/test.csv')
            .then(response => response.text())
            .then(csvText => {
                // Assuming the CSV is simple and just needs the first value
                const firstRow = csvText.split('\n')[0]; // Get the first row
                const firstValue = firstRow.split(',')[0]; // Get the first value
                
                // Update the HTML content
                document.getElementById('value1').textContent = firstValue;
            })
            .catch(error => console.error('Error loading the CSV:', error));
});

// Get the elements
var popout = document.getElementById("statsPopout");
var btn = document.getElementById("statsPopoutBtn");
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the popout
btn.onclick = function() {
  popout.style.display = "block";
}

// When the user clicks on <span> (x), close the popout
span.onclick = function() {
  popout.style.display = "none";
}

// Also, consider closing the popout if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == popout) {
    popout.style.display = "none";
  }
}

