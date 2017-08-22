var ua = navigator.userAgent.toLowerCase();  //获取客户端信息
	function openApp(){
		if (/iphone|ipad|ipod/.test(ua)){
			var ifr = $('<iframe src="" width="" height=""></iframe>');
			ifr.src = 'artapp://';
			ifr.css({'display':'none'});
			ifr.appendTo(body);
			window.setTimeout(function(){
				$('body').removeChild(ifr);
			},3000);
		}else if(/android/.test(ua)){
			var ifr = $('<iframe src="" width="" height=""></iframe>');
			ifr.src = 'artapp://artapp.cn/';
			ifr.css({'display':'none'});
			ifr.appendTo(body);
			window.setTimeout(function(){
				$('body').removeChild(ifr);
			},3000);
		}
	}
	openApp();