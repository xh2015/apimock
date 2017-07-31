var jsonDatas = [];
jsonDatas[0] = "not exist";
jsonDatas[1] = "lac";
jsonDatas[2] = "mac";
jsonDatas[3] = "nac";
jsonDatas[4] = "zac";

module.exports = function (data, util) {
    	//get the paramter from the url
    	var index = data.query.userId;
    	var jsonResponse = jsonDatas[0];
    	if (index < 5) {
    		jsonResponse = jsonDatas[index];	
    	}

    	//mock delay
    	jsonResponse.$$delay=100;

    	//mock response header
    	jsonResponse.$$header= {
    	    'X-Access-Token':'xxxxxxxx',
        	'Cache-Control':'max-age=3'	
    	};

    	return jsonResponse;
};