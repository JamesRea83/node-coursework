var url = require("url");
var http = require("http");


function timeStamper(pathname, response) {	
	var testPath = url.parse(pathname, true).pathname.replace(/\//, "")
	console.log("timeStapmer fired with: " + testPath)


	var result = {
    "unix": "",
    "natural": ""
}
	if (isNaN(testPath)) {
		
		//handle natural date
    
		var d = new Date(testPath.replace(/%20/g, " ")).toLocaleDateString().split(" ")
			console.log(d.toString().split("/"))
    		result.unix = Date.parse(d) / 1000;
	
		result.natural = d[1] + " " + d[2] + " " + d[3]; 

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(JSON.stringify(result));
		response.end();
    
	
} else {

		//handle unix date

		var d = new Date(testPath * 1000).toLocaleDateString().split(" ")
   	
    		result.unix = Date.parse(d) / 1000;
   	
		result.natural = d[1] + " " + d[2] + " " + d[3];    

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(JSON.stringify(result));
		response.end();
	
}	

}


exports.timeStamper = timeStamper;