module.exports = {

	//模拟接口 'http://localhost:9999/api/users'
	'/api/users': 'mock::/api/users.json',

	//模拟接口 'http://localhost:9999/api/keys'
	'/api/userIds': 'mock::/api/ids.js',

	//模拟接口 ‘http://localhost:9999/api/query?userId=x’
	'/api/query': 'mock::api/query.js',

	//模拟接口 'http://localhost:9999/api/users'
	'POST::/v1/patrol/tasks/list': 'mock::/api/patrol.json',

	//模拟接口 'http://localhost:9999/api/users'
	'POST::/v1/patrol/tasks/status': 'mock::/api/patrol_status.json',

	//模拟接口 'http://localhost:9999/api/users'
	'POST::/v1/patrol/tasks/upload': 'mock::/api/base.json',

	//模拟接口 'http://localhost:9999/api/users'
	'POST::/m/v1/common/data/update': 'mock::/api/offline.json',

	//模拟接口 'http://localhost:9999/api/users'
	'POST::/m/v3/project/projectlist': 'mock::/api/project.json',

	//模拟接口 'http://localhost:9999/api/users'
	'POST::/m/v1/message/amount': 'mock::/api/msgcout.json',

	// 如果只mock上面定义的接口， 其它接口都走 ‘http://productHost.com’ 服务器对应的接口，添加如下配置即可
	// 'ALL::/:pattern*': 'http://productHost.com'
	// 'ALL::/v1/:pattern*': 'http://192.168.6.91:8080/v1/'
};

