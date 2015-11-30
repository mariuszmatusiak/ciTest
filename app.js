//var helpers = require("./helpers");
var AWS = require("aws-sdk");
var AWS_CONFIG_FILE = "./config.json";

AWS.config.loadFromPath(AWS_CONFIG_FILE);

//var listen = require("./digest").action
//var file = require("./file").action


var PORT = 8080;

var urlMap = [
	//{path: "/", action: listen}	 
	//{path: "/file", action: file},	
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

