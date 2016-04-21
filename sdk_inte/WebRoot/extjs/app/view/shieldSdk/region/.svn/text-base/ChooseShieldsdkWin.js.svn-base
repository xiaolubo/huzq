/** 
 * 模块数据的主显示区域，继承自Grid 
 */  
  
Ext.define('sdkinte.view.shieldSdk.region.ChooseShieldsdkWin', {  
            extend : 'Ext.window.Window',  
            alias : 'widget.choose_shieldsdk_win',  //不能跟id同名，否则用var grid = Ext.widget("usergrid");会报错
            id:'choose_shieldsdk_win',//当用 var grid = Ext.widget("usergrid");获取到的grid无法正常调用grid的方法，增加id属性后，使用var grid = Ext.getCmp('user_grid');获取grid一切正常，不知原因所在
//            requires : ['zm.store.UserStore'],
            controller : 'shieldSdk',  
            viewModel: 'shieldSdk',   
//            bind : {  
//                title : '{tf_title}' // 数据绑定到ModuleModel中的tf_title  
//               
//            },  
           title:'选择被屏蔽SDK',
           layout:'fit',  
           width:850,  
           height:550,  
           closeAction:'destroy',  
           plain: true,  
           modal:true,
           items: [{
	       	   xtype:'grid',
	   	       id:'choose_shieldsdk_grid',
	   	       selModel : {
				    selType : 'checkboxmodel',
				    mode : 'SIMPLE'
				},
	           store:'sdkinte.store.sdk.SinglesdkStore',
	           columns: [
					  //行号
			          { 
				          xtype: "rownumberer",
				          width: 33
				      },{
			            text:'ID',
			            dataIndex: 'id',
			            hidden: true
			          },
			          	{
			            text: 'SKD ID',
			            width: 100,
			            dataIndex: 'sdkid'
			        },
			        {
			            text: '名称',
			            width: 100,
			            dataIndex: 'sdkName',
			            hidden: false
			        },{
			            text: '是否开通',
			            width: 100,
			            dataIndex: 'isOpen',
			            hidden: false,
			        	renderer: function (val) {
			            	if(val == 1){
			            		return "是";
			            	}else{
			            		return "<font color ='red'>否</font>";
			            	}
          				}
			        }
			       
				   ],
			        bbar: [{
			                xtype: 'pagingtoolbar',
			                store: 'sdkinte.store.sdk.SinglesdkStore',
			                displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
			                emptyMsg: "没有数据",
			                beforePageText: "当前页",
			                afterPageText: "共{0}页",
			                displayInfo: true
			            }]
       }],
       buttons: [
       {
       		 text: "确定",
             handler:'chooseShieldsdkConfirm'
       }]

        })