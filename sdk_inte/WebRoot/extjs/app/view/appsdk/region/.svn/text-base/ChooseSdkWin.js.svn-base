/** 
 * 模块数据的主显示区域，继承自Grid 
 */  
  
Ext.define('sdkinte.view.appsdk.region.ChooseSdkWin', {  
            extend : 'Ext.window.Window',  
            alias : 'widget.choose_sdk_win',  //不能跟id同名，否则用var grid = Ext.widget("usergrid");会报错
            id:'choose_sdk_win',//当用 var grid = Ext.widget("usergrid");获取到的grid无法正常调用grid的方法，增加id属性后，使用var grid = Ext.getCmp('user_grid');获取grid一切正常，不知原因所在
//            requires : ['zm.store.UserStore'],
            controller : 'appsdk',  
            viewModel: 'appsdk',   
//            bind : {  
//                title : '{tf_title}' // 数据绑定到ModuleModel中的tf_title  
//               
//            },  
           title:'选择SDK',
           layout:'fit',  
           width:850,  
           height:550,  
           closeAction:'destroy',  
           plain: true,  
           modal:true,
           items: [
           	{
	       	   xtype:'grid',
	   	       id:'choose_sdk_grid',
	   	       selModel : {
				    selType : 'checkboxmodel',
				    mode : 'SIMPLE'
				},
	           store:'sdkinte.store.sdk.SinglesdkStore',
	           columns: [
									 //行号
				          { xtype: "rownumberer",
				//               text: "序号",
				          width: 33
				          
				          },
				          {
				            text:'ID',
				            dataIndex: 'id',
				             width: 50,
				             hidden: false
				          },
				          	{
				            text: 'sdkid',
				            width: 100,
				            dataIndex: 'sdkid'
				        },{
				            text: 'sdk名称',
				            width: 100,
				            dataIndex: 'sdkName',
				            hidden: false
				        },{
				            text: '是否开通',
				            width: 100,
				            dataIndex: 'isOpen',
				            hidden: false,
				//            renderer: function (val) {
				//            	if(val == 1){
				//            		return "是";
				//            	}else{
				//            		return "<font color ='red'>否</font>";
				//            	}
				//            }
				              renderer : function(value , cellmate,record){
				//					var status = record.data["status"];
				//					var cashorderId = record.data["cashorderId"];
				            			var sdkid = record.data["id"]
				            			if(value == 1){
					            			cellmate.tdStyle = 'color :blue';
											return "<span  onmouseover = 'javascript: this.style.textDecoration = \"underline\"', onmouseout = 'javascript: this.style.textDecoration=\"none\"'>是</span>";
				            			}else{
				            				cellmate.tdStyle = 'color :red';
											return "<span  onmouseover = 'javascript: this.style.textDecoration = \"underline\"', onmouseout = 'javascript: this.style.textDecoration=\"none\"'>否</span>";
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
             handler:'chooseAppsdkConfirm'
       }]

        })