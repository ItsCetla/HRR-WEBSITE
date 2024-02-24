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
  });