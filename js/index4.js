$(function () {
	function _openAppUrl(appUrl){
		var ua = navigator.userAgent.toLocaleLowerCase(),
		openBrowser = null,
		deviceVersion = 0,
		matchVersion = null,
		openAppType = "",
		downLoadUrl = 'http://dwz.cn/2M5IJ4';
	
		//如果是在微信内部点击的时候
		if(ua.indexOf("micromessenger") != -1 ){
			_openAppUrl = function(){
				alert("DEMO，请在移动端的浏览器查看！");
			}
		}else{
			//在浏览器打开，判断是在移动端还是在PC端
			if(matchVersion = navigator.userAgent.match(/OS\s*(\d+)/)){
				//赋值，并且判断
				//IOS设备的浏览器
				deviceVersion = matchVersion[1] || 0;
				if(deviceVersion - 9 >= 0){
					openAppType = "newType";
				}
			}else if(matchVersion = navigator.userAgent.match(/Android\s*(\d+)/)){
				//Android的设备
				deviceVersion = matchVersion[1] || 0;
				if(deviceVersion - 5 >= 0){
					openAppType = "newType";
				}
			}else{
				//PC端的设备
				openAppType = "pc";
			}
			if(openAppType == "pc"){
				_openAppUrl = function(){
					alert("DEMO，请在移动端的浏览器查看！");
				}
			}else if(openAppType == "newType"){
				//使用新的方法，尝试打开APP
				//IOS>9,Android>5的版本
				_openAppUrl = function(url){
					var history = window.history,
					body = $("body").eq(0),
					ifr = $('<iframe class = "full-screen dn" style = "z-index:101;border:none;width:100%;height:100%;" src="'+downLoadUrl+'"></iframe>');
					body.append(ifr);
					$(window).on("popstate",function(e){
						var state = history.state;
						if(!state){
							ifr.addClass("dn");
						}
					});
					function _show(){
						history.pushState({}, "下载APP链接页", "");
						ifr.removeClass("dn");
					}
					_openAppUrl = function(url){
						location.href = url;
						_show();
					}
					_openAppUrl(url);
				}
			}else{
				//使用计算时差的方案打开APP
				var checkOpen = function (cb){
					var _clickTime = +(new Date()),
					_count = 0,
					intHandle = 0;
				
					//启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
					intHandle = setInterval(function(){
						_count++;
						var elsTime = +(new Date()) - _clickTime;
					
						if (_count>=100 || elsTime > 3000 ) {
							clearInterval(intHandle);
							//计算结束，根据不同，做不同的跳转处理，0表示已经跳转APP成功了
							if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
								cb(0);
							} else {
								cb(1);
							}	
						}
					},20);
				}
				_openAppUrl = function(url){
					var ifr = document.createElement('iframe');
					ifr.src = url;
					ifr.style.display = 'none';
					checkOpen(function(opened){
						if(opened === 1){
							location.href = downLoadUrl;
						}
					});
					document.body.appendChild(ifr);
					setTimeout(function() {
						document.body.removeChild(ifr);
					}, 2000);
				}
			}
		}
		_openAppUrl(appUrl);
	}
	var appUrl = "artapp://artapp.cn/";
	$("#tryOpenApp").on("click",function(){
		_openAppUrl(appUrl);
		return false;
	});
});