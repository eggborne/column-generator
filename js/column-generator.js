$(function(){

})
function ColumnGenerator() {
	this.insertLayout = function(id,layoutArray,destination,bordered) {
		var parent
		destination ? parent = destination : parent = "#stage"
		var border = ''
		bordered ? border = ';border: 1px solid black' : false
		var rows = layoutArray.length
		$(parent).append('<div id='+id+'></div>')
		for (var r=0;r<rows;r++) {
			var columns = layoutArray[r][0].length
			// set the row's height if specified
			var rowHeight = (layoutArray[r][1] || 'auto')
			// make the row divs
			$('#'+id).append(`<div id="row-`+r+`" class="row generated"></div>`)
			// grab the row div you just made
			var newRow = $('#row-'+r)
			// put the columns in
			for (var c=0;c<columns;c++) {
				var columnWidth = layoutArray[r][0][c]
				newRow.append(`<div id="column-`+r+`-`+c+`" class="col-xs-`+columnWidth+` generated" style="height:`+rowHeight+border+`">#column-`+r+`-`+c+`</div>`)
			}
		}
	}
}
var exampleLayout =
[
  [[4,4,4],'220px'],
  [[4,3,2,3],'60px'],
  [[4,4,4],'100px'],
  [[1,2,1,3,5],'200px'],
	[[3,4,5],"300px"]
]
