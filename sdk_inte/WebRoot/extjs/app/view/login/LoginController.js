Ext.define(
  'sdkinte.view.login.LoginController',
  {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

   //用户登录按钮事件处理
   onLoginbtnClick: function(){
        var form = this.lookupReference('form'); 
		if (form.isValid()) {
			var obj = form.getValues();
			 form.submit({
                      url: "../user/getUser",
                      success: function (form, result) {
                      	//cookie超时时间  一年:now.getTime() + 365 * 24 * 60 * 60 * 1000
                      	var now = new Date();
 						var expiry = new Date(now.getTime() + 30*60 * 1000);
                      	Ext.util.Cookies.set('username',obj.username,expiry);
	                  	Ext.application({
						    name: 'sdkintes',//这里的名字不能跟app.js里的名字一样
						    autoCreateViewport: 'sdkinte.view.main.Main'
						});
						
						var appmainwin = Ext.getCmp('appmainwin');
						var mainViewModel = appmainwin.getViewModel();
					    mainViewModel.set('user.name',obj.username);	

	                  	var loginwin = Ext.getCmp("loginwin");
	                  	loginwin.close();
                       },
                      failure: function (form, action){
                         	Ext.MessageBox.alert("Error","登陆失败");
                      }
             });
		}
    },

    reset : function(){
   		 var form = this.lookupReference('form'); 
         form.reset();//重置form 
    }


  }
);