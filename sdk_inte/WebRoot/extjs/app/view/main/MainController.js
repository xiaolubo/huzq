/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('sdkinte.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',

    onClickButton: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
      
     // 选择了主菜单上的菜单后执行  
   onMainMenuClick : function(menuitem) {  
     var maincenter = this.getView().down('tabpanel');  
     //menuitem.id    模块名称
     var newTab = maincenter.getComponent(menuitem.id);
     // Ext.Msg.alert('Status',newTab );
      if (!newTab) {  
        newTab = maincenter.add({
           title: menuitem.text,
           itemId: menuitem.id,  
           xtype : menuitem.id,  
           closable : true,  
           reorderable : true 
        });  
        maincenter.setActiveTab(newTab);  
     }else { //如果tab中存在，那么就直接将节点指向这个页面  
         maincenter.setActiveTab(newTab);  
     }  
//     maincenter.setActiveTab(maincenter.add({  
//                xtype : 'userpanel',  
//                closable : true,  
//                reorderable : true  
//            }));  
            
    // maincenter.setActiveTab(newTab); 
//    
//    if(menuitem.id == "questionPanel"){
//    	    var qgrid = Ext.getCmp('rewardNotActive_grid');
//            var qstore = qgrid.getStore();
//            qstore.reload({
//			    params : {
//			        'typeId':1,
//                    'statuId':0,
//                    'addTime':'',
//                    'queDes':'',
//                    'titleName':'',
//                    'userId':'',
//                    'askUserName':'',
//                    'day':''
//			    }
//			});
//    }
    },
    
    
        // 隐藏顶部和底部的按钮事件  
    hiddenTopBottom : function() {  
    // 如果要操纵控件，最好的办法是根据相对路径来找到该控件，用down或up最好，尽量少用getCmp()函数。  
    this.getView().down('maintop').hide();  
    this.getView().down('mainbottom').hide();  
    if (!this.showButton) { // 显示顶部和底部的一个控件，在顶部和底部隐藏了以后，显示在页面的最右上角  
        this.showButton = Ext.widget('component', {  
                    glyph : 0xf013,  
                    view : this.getView(),  
                    floating : true,  
                    x : document.body.clientWidth - 32,  
                    y : 0,  
                    height : 4,  
                    width : 26,  
                    style : 'background-color:#cde6c7',  
                    listeners : {  
                        el : {  
                            click : function(el) {  
                                var c = Ext.getCmp(el.target.id); // 取得component的id值  
                                c.view.down('maintop').show();  
                                c.view.down('mainbottom').show();  
                                c.hide();  
                            }  
                        }  
                    }  
                })  
    };  
    this.showButton.show();  
    }, 
  
    // 如果窗口的大小改变了，并且顶部和底部都隐藏了，就要调整显示顶和底的那个控件的位置  
    onMainResize : function() {  
      if (this.showButton && !this.showButton.hidden) {  
         this.showButton.setX(document.body.clientWidth - 32);  
      }  
   },
   
      loginOut : function(){
   	  Ext.util.Cookies.clear('username');
   	  var appmainwin = Ext.getCmp('appmainwin');
   	  //奶奶的这是一个全局变量，应该是原生的吧location
   	  location="javascript:location.reload()";//窗口关闭后刷新当前页面                
   	  appmainwin.hide();
   	  	
   }
});
