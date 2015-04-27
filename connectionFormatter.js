
var connectionFormatter = function(req){
	return request.headers.connection;
}

module.exports = connectionFormatter;