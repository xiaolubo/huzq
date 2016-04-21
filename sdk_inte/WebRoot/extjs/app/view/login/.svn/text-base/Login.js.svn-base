Ext.define( 'sdkinte.view.login.Login',
  {
	requires:['sdkinte.view.login.LoginController'],
    extend: 'Ext.window.Window',
    controller: 'login',
	closable: false,
	resizable : false,
	modal: true,
	id:"loginwin",
	//draggable: false,
	autoShow: true,
	title: ' SDK集成管理系统',
	items:[{
		xtype:'form',//父窗体
		reference: 'form',
		bodyPadding: 20,
		items:[{
			xtype: 'textfield',
			name: 'username',
			labelWidth: 50,
		    fieldLabel: '用户名',
			allowBlank: false,
			value:'',
			emptyText: '用户名或邮箱地址'
		  },{
			xtype: 'textfield',
			name: 'password',
			value:'',
			labelWidth: 50,
			inputType: 'password', 
		    fieldLabel: '密  码',
			allowBlank: false,
			emptyText: '请输入您的密码'
		  }]
	}],
    buttons: [{
			    name: 'loginbutton',
			    text: '登录',
				region: 'center',
				listeners:{
				click: 'onLoginbtnClick'//单击事件 调用LoginConroller.js中的onLoginbtnClick函数
				}
			  },{
			    name: 'registbutton',
			    text: '重置',
				listeners:{
				  click: 'reset'
				}
			  }]
  }
);