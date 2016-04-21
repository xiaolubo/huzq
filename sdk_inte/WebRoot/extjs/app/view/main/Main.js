/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('sdkinte.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'sdkinte.view.main.MainController',
        'sdkinte.view.main.MainModel',
        'sdkinte.view.main.region.Top',
        'sdkinte.view.main.region.Bottom',
        'sdkinte.view.main.region.AccordionMainMenu',
        'sdkinte.view.app.App',
        'sdkinte.view.sdk.Sdk',
        'sdkinte.view.singleApp.Singleapp',
        'sdkinte.view.singleSdk.Singlesdk',
        'sdkinte.view.operator.Operator',
        'sdkinte.view.channel.Channel',
        'sdkinte.view.province.Province',
        'sdkinte.view.shieldSdk.ShieldSdk',
        'sdkinte.view.appsdk.Appsdk',
        'sdkinte.view.requestlog.Requestlog'
    ],
    id:"appmainwin",
    alias : 'widget.appmainwin', 
    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{  
             xtype : 'maintop',  
             region : 'north' // 把他放在最顶上  
       }, {  
            xtype : 'mainbottom',  
            region : 'south' // 把他放在最底下  
        },{  
            xtype : 'mainmenuaccordion',  
            region : 'west', // 左边面板  
            split : false  
           },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
        	   title: 'APP计费点列表',
	           itemId: 'apppricepanel',  
	           xtype : 'apppricepanel',  
	           closable : true,  
	           reorderable : true 
//        	itemId: 'tab1',
//            title: '欢迎使用',
//            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }],
    initComponent : function() {  
    	Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性  
        this.callParent();  
	},
	listeners : {  
        "afterrender" : function(){  
        	//设登陆者
        	var username = Ext.util.Cookies.get('username');
			var appmainwin = Ext.getCmp('appmainwin');
			var mainViewModel = appmainwin.getViewModel();
		    mainViewModel.set('user.name',username);
        }  
    }  
});
