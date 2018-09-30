

// // Get a reference to the table body
// var tbody = d3.select("tbody");

// // Console.log the alien data from data.js
// console.log(data);

// // // Loop Through `data` and console.log each alien report
// data.forEach(function(alienReport) {
//   console.log(alienReport);
// });

// // // d3 to append one table row `tr` for each alien report object

// data.forEach(function(alienReport) {
 
//   var row = tbody.append("tr");
// });

// // // Object.entries to console.log each alien report value
// data.forEach(function(alienReport) {
//   console.log(alienReport);
//   var row = tbody.append("tr");

//   Object.entries(alienReport).forEach(function([key, value]) {
  
//   });

 
// });

// // // d3 to append 1 cell per alien report value 
// data.forEach(function(alienReport) {
//   console.log(alienReport);
//   var row = tbody.append("tr");

//   Object.entries(alienReport).forEach(function([key, value]) {
//     var cell = tbody.append("td").text(value);
//   });
// });

// // d3 to update each cell's text with
// // alien report values
// data.forEach(function(alienReport) {
//   console.log(alienReport);
//   var row = tbody.append("tr");
//   Object.entries(alienReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the alien report object
//     var cell = tbody.append("td");
//     cell.text(value);
//   });

  
// });

// Filter by date

// from data.js
var tableData = data;

// YOUR CODE HERE!
var userInput = function selectDates(inputDate) {

    return data.filter(inputDate)
};


// data.forEach(function(data) {
//   var row = tbody.append("tr");
//   Object.entries(data).forEach(function([key, value]) {
//     var cell = tbody.append("td").text(value);
//   });
// });



var submit = d3.select("#filter-btn");

var filteredData = submit.on("click", function () {


    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = data.filter(data => data.datetime === inputValue);

    var tbody = d3.select("tbody");



    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);

        });
    });
});




