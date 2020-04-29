// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(tableData);

function populatetabeldata(data){
  tbody.text("")
data.forEach((UFOdata) => {
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })};



  
  populatetabeldata(tableData);

  // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime").property("value");
  // Get the value property of the input element
  filteredData = tableData;

  console.log(inputDate);
  //console.log(people);

  if (inputDate.length>0) {

    var filteredData = filteredData.filter(dateselected => dateselected.datetime === inputDate);
   };

 

  //console.log(filteredData);
 

  populatetabeldata(filteredData);
});
