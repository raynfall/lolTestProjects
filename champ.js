var champName = "";
var APIKEY = "ddb9a634-e353-4006-8925-fc4decd7aa55";
// var cName = "";

function champLookUp () {
	var ID = "";
	id = $("#champName").val();

	if(id !== "") {
		$.ajax( {
			url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + id + '?api_key=' + APIKEY,
			type: 'GET',
			dataType: 'json',
			data: {

			},
			success: function (json) {
				// var champID = id.replace(" ", "");

				// champID = champID.toLowerCase().trim();
				// console.log('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + id + '?api_key=' + APIKEY);
				var champID = ID;

				// console.log(champID);

				// HERE IS PROBLEM BELOW
				champName = json.name;
				console.log(champName);
				document.getElementById("cName").innerHTML = champName;
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("There was an error");
			}
		});
	}
	else{}
}