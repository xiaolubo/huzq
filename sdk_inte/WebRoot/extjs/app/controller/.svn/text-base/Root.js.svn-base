/**
 * The main application controller. This is a good place to handle things like routes.
 * 这是主程序的控制器，这里适合做类似路由转发这样的事情
 */
Ext.define('sdkinte.controller.Root',
	{
      extend: 'Ext.app.Controller',
      uses: ['sdkinte.view.login.Login','sdkinte.view.main.Main'],
    /**
     * 初始化事件
     */
	  onLaunch: function () {
	  	console.log('初始化事件  onLaunch');
	    var session = this.session = new Ext.data.Session();
	    if (Ext.isIE) {
//		  Ext.Msg.alert('<br/>亲，你使用的是IE,建议使用其它浏览器，<br/><br/>会有更好的视觉效果哦');
		   Ext.MessageBox.confirm("提示", "亲，建议使用其它浏览器,会有更好的视觉效果哦<br/>", 
		  	 function (btnId) {
		            　	if(btnId == 'yes'){
		            	//进入系统
		              	var username = Ext.util.Cookies.get('username');
				    	if(null == username || username == ""){
				    		this.login = new sdkinte.view.login.Login();
				    	}
	            } 
	      　　 });
	    }else{
				  //进入系统
              	var username = Ext.util.Cookies.get('username');
		    	if(null == username || username == ""){
		    		this.login = new sdkinte.view.login.Login();
		    	}
	    };
	 
	  }

  });
