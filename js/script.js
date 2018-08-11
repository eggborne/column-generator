function ColumnGenerator() {
	this.insertLayout = function(parent,layoutArray,bordered) {
		var border
		bordered ? border = ';border: 1px solid black' : false
		var rows = layoutArray.length
		for (var r=0;r<rows;r++) {
			var columns = layoutArray[r][0].length
			// set the row's height if specified
			var rowHeight = (layout1[r][1] || 'auto')
			// make the row divs
			$(parent).append(`<div id="row-`+r+`" class="row generated"></div>`)
			// grab the row div you just made
			var newRow = $('#row-'+r)
			// put the columns in
			for (var c=0;c<columns;c++) {
				var columnWidth = layoutArray[r][0][c]
				newRow.append(`<div id="column-`+r+`-`+c+`" class="col-md-`+columnWidth+`" style="height:`+rowHeight+border+`"></div>`)
			}
		}
	}
}
var layout1 = 
[
  [[4,4,4],'300px'],
  [[4,3,2,3],'600px'],
  [[4,4,4],'100px']
]