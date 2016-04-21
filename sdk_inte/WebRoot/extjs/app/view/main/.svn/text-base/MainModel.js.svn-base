/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('sdkinte.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'sdkinte'
    },
 data: {
        name: 'sdkinte',
        // 系统信息  
        system : {  
            name : 'SDK集成管理后台',  
            version : '1.2016.2.19'
        },  
  
        // 用户单位信息和用户信息  
        user : {  
            company : '深圳市明日空间信息技术有限公司',  
            department : '技术部',  
            name : '明日空间'  
        },  
  
        // 服务单位和服务人员信息  
        service : {  
            company : '深圳市明日空间信息技术有限公司', 
            copyright : '明日空间'  
        },
        
          // 系统菜单的定义，这个菜单可以是从后台通过ajax传过来的  
       systemMenu : [{  
            text : 'APP管理', // 菜单项的名称  
            icon : '', // 菜单顶的图标地址  
            glyph : 0,// 菜单项的图标字体的数值  
            expanded : true, // 在树形菜单中是否展开  
            description : '', // 菜单项的描述  
            items : [{  
                text : 'APP列表',  
                itemId : 'apppanel',
                 glyph : 0xf02e  
            },{  
                text : 'APP计费点列表',  
                itemId : 'apppricepanel',
                 glyph : 0xf02e  
            } ,{  
                text : 'APPSDK列表',  
                itemId : 'appsdkpanel',
                 glyph : 0xf02e  
            }]  
  
        },{  
            text : 'SDK管理', // 菜单项的名称  
            icon : '', // 菜单顶的图标地址  
            glyph : 0,// 菜单项的图标字体的数值  
            expanded : true, // 在树形菜单中是否展开  
            description : '', // 菜单项的描述  
            items : [
            	{  
                text : 'SDK列表',  
                itemId : 'singlesdkpanel',
                 glyph : 0xf02e  
            } ,{  
                text : 'SDK计费点列表',  
                itemId : 'sdkpanel',
                 glyph : 0xf02e  
            } ,{  
                        text : 'SDK屏蔽-渠道',  
						itemId : 'shieldSdkPanel' ,
						 glyph : 0xf02e  
                    }]  
  
        }, {  
            text : '基础设置',  
            expanded : true,  
            items : [{  
                        text : '运营商列表',  
						itemId : 'operatorPanel' ,
						 glyph : 0xf02e  
                    },{  
                        text : '渠道列表',  
						itemId : 'channelPanel' ,
						 glyph : 0xf02e  
                    },{  
                        text : '省份列表',  
						itemId : 'provincePanel' ,
						 glyph : 0xf02e  
                    }]  
        },{  
            text : '数据统计',  
            expanded : true,  
            items : [{  
                        text : '请求量',  
						itemId : 'requestlogpanel' ,
						 glyph : 0xf02e  
                    }]  
        }
  
]  
    }
});