if (navigator.userAgent.match(/android/i)) {
		// 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
		// 否则打开a标签的href链接
		var isInstalled;
		var ifrSrc = 'cartooncomicsshowtwo://platformapi/startApp?type=0&id=${com.id}&phone_num=${com.phone_num}';
		var ifr = document.createElement('iframe');
		ifr.src = ifrSrc;
		ifr.style.display = 'none';
		ifr.onload = function() {
	        // alert('Is installed.');
	        isInstalled = true;
	        alert(isInstalled);
	        document.getElementById('openApp0').click();
	        
	    };
	    ifr.onerror = function() {
	        // alert('May be not installed.');
	        isInstalled = false;
	        alert(isInstalled);
	    }
		document.body.appendChild(ifr);
		setTimeout(function() {
			document.body.removeChild(ifr);
		},1000);
}
		
//ios判断  if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) 
if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))  {
	//Animation://com.yz.animation
	var isInstalled;
	//var gz = '{"comName":"${com.short_name}","comID":"${com.id}","comPhoneNum":"${com.phone_num}","type":"0"}';
	//var jsongz =JSON.parse(gz);
	var ifrSrc = 'Animation://?comName=${com.short_name}&comID=${com.id}&comPhoneNum=${com.phone_num}&type=0';
	
	
	var ifr = document.createElement('iframe');
	ifr.src = ifrSrc;
	ifr.style.display = 'none';
	ifr.onload = function() {
        alert('Is installed.');
        isInstalled = true;
        alert(isInstalled);
        document.getElementById('openApp1').click();
    };	
    ifr.onerror = function() {
        alert('May be not installed.');
        isInstalled = false;
        alert(isInstalled);
    }
	document.body.appendChild(ifr);
	setTimeout(function() {
		document.body.removeChild(ifr);
	},1000);
}