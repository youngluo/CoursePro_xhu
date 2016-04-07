(function(M, $) {

	var config = {
		host: 'http://192.168.199.140/CoursePro_xhu/server/'
	};

	window.Config = config;

	var Helper = function() {}
	$.extend(Helper.prototype, {
		getData: getData
	});

	function getData(c, cb) {
		plus.nativeUI.showWaiting();
		M.ajax(Config.host + '?c=get' + c, {
			data: {
				user: plus.storage.getItem('user'),
				name: plus.storage.getItem('name')
			},
			type: 'get',
			timeout: '15000', //15s
			success: function(res) {
				plus.nativeUI.closeWaiting();
				cb(res);
			},
			error: function(xhr, type, error) {
				plus.nativeUI.closeWaiting();
				if (type == 'timeout') {
					M.toast('获取数据时间较长，请重新获取！');
				}
			}
		});
	}

	window.H = new Helper;

}(mui, Zepto));