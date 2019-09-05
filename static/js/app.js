// from data.js
var tableData = data;

    // button
    var submit = d3.select("#filter-btn");

    // body
var tbody = d3.select("tbody");

// table using append
function buildTable(data){

    tbody.html("");
    data.forEach((dataRow) => {

        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {

            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// click
function handleClick(){

    // prevent refresh
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }

    //table 
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);