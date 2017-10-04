$(document).ready(function() {


	$("form").submit(function() {
		var user = $(this).serializeArray();
		var htmlString = "<tr>";
		for (var i=0; i < 4; i++) {
			htmlString += "<td>" + user[i].value + "</td>"
		}
		htmlString += "</tr>"
		$("table").children().append(htmlString);
		return false;
	})


});