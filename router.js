function route(handle, pathname, response) {
	console.log("about to route " + pathname);
	 handle(pathname, response);
}

exports.route = route;
