$(document).ready(function(){
  createLayout("#stage",layout1)
})
var layout1 = 
[
  [4,4,4],
  [4,3,2,3],
  [4,4,4]
]
function createLayout(container,layoutArray) {
  var rows = layoutArray.length
  for (var r=0;r<rows;r++) {
    var columns = layoutArray[r].length
    // make the row divs
    $(container).append(`<div id="row-`+r+`" class="row" style="text-align:left"></div>`)
    // grab the row div you just made
    var newRow = $('#row-'+r)
    // put the columns in
    for (var c=0;c<columns;c++) {
      var columnWidth = layoutArray[r][c]
      console.log("col wid is " + columnWidth)
      newRow.append(`<div id="column-`+r+`-`+c+`" class="bordered col-md-`+columnWidth+`" style="text-align:right">column-`+r+`-`+c+`</div>`)
    }
  }
}