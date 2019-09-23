//code framework from class activities 14.3.9 & 14.3.3

// Assign the data from `data.js` to a descriptive variable
// from data.js
var tabledata = data;

// button
var button = d3.select("#filter-btn");

// body
var tbody = d3.select("tbody");

// table using append
function UFOtable(data){

    tbody.html("");
    data.forEach((UFOsighting) => {

        let row = tbody.append("tr");
        Object.values(UFOsighting).forEach((dat) => {

            let cell = row.append("td");
            cell.text(dat);
        });
    })
}

// click
function buttonclick(){

    // prevent refresh
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let datetable = tabledata;

    if(date) {
        datetable = datetable.filter((row) => row.datetime === date);
    }

    //table 
    UFOtable(datetable);
}

d3.selectAll("#filter-btn").on("click", buttonclick);

UFOtable(tabledata);

   // data.forEach((weatherReport) => {
     //   var row = tbody.append("tr");
       // Object.entries(weatherReport).forEach(([key, value]) => {
         // var cell = row.append("td");
          //cell.text(value);
   //     });
     // });

  



//   var filteredData = people.filter(person => person.bloodType === inputValue);
  
  
// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
// });

   // data.forEach((weatherReport) => {
     //   var row = tbody.append("tr");
       // Object.entries(weatherReport).forEach(([key, value]) => {
         // var cell = row.append("td");
          //cell.text(value);
   //     });
     // });


// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

