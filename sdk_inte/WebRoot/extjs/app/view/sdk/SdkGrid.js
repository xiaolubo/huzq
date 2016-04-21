/** 
 * 模块数据的主显示区域，继承自Grid 
 */  
  
Ext.define('sdkinte.view.sdk.SdkGrid', {  
            extend : 'Ext.grid.Panel',  
            alias : 'widget.sdkgrid',  //不能跟id同名，否则用var grid = Ext.widget("usergrid");会报错
            id:'sdk_grid',//当用 var grid = Ext.widget("usergrid");获取到的grid无法正常调用grid的方法，增加id属性后，使用var grid = Ext.getCmp('user_grid');获取grid一切正常，不知原因所在
//            uses : ['cosplay.view.video.region.GridToolbar','cosplay.view.video.VideoModel'],  
            requires : [
	            'sdkinte.view.sdk.region.SdkGridToolbar',
	            'sdkinte.view.sdk.region.GridToolBarSearch'
            ],
            controller : 'sdk',  
            viewModel: 'sdk',   
//            bind : {  
//                title : '{tf_title}' // 数据绑定到ModuleModel中的tf_title  
//               
//            },  
            dockedItems : [
            {  
                        xtype : 'sdkGBBarSea', // 按钮toolbar  
                        dock : 'top'  
                    },
            		{  
                        xtype : 'sdkpricetoolbar', // 按钮toolbar  
                        dock : 'top'  
                    }],  
          selModel: { 
                    selType: 'checkboxmodel',
//                     injectCheckbox: 0,
                     mode: "SIMPLE"   //"SINGLE"/"SIMPLE"/"MULTI"
//                     checkOnly: true     //只能通过checkbox选择
                    }, 
//          columnLines: true,
          
          columns: [
             //行号
          { xtype: "rownumberer",
//               text: "序号",
          width: 33
          
          },
          {
            text:'ID',
            dataIndex: 'id',
             width: 100,
             hidden: true
          },
          	{
            text: '名称',
            width: 100,
            dataIndex: 'name'
        },{
            text: '运营商',
            width: 100,
            dataIndex: 'operatorName',
            hidden: false
        }
//        ,{
//            text: '省份',
//            width: 100,
//            dataIndex: 'provinceName',
//            hidden: false
//        }
        ,{
            text: '计费点',
            width: 100,
            dataIndex: 'price',
            hidden: false
        }
//        ,{
//            text: '权重',
//            width: 100,
//            dataIndex: 'level',
//            hidden: false
//        }
        ,{
            text: '省份',
            width: 100,
            dataIndex: 'isshield',
            hidden: false,
//            renderer: function (val) {
//            	if(val == 1){
//            		return "<font color ='red'>是</font>";
//            	}else{
//            		return "否";
//            	}
//            }
            renderer : function(value , cellmate,record){
//					var status = record.data["status"];
//					var cashorderId = record.data["cashorderId"];
            			var sdkname = record.data["name"];
            			var operatorName = record.data["operatorName"];
            			var price = record.data["price"];
            			var str = '"'+sdkname+','+operatorName+','+price+'"';
            			cellmate.tdStyle = 'color :blue';
							return "<span onclick = 'openProvinceWin("+str+")' onmouseover = 'javascript: this.style.textDecoration = \"underline\"', onmouseout = 'javascript: this.style.textDecoration=\"none\"'>查看</span>";
			}
        }
     
        ],
        bbar: [{
                xtype: 'pagingtoolbar',
                store: 'sdkinte.store.sdk.SdkStore',
                displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
                emptyMsg: "没有数据",
                beforePageText: "当前页",
                afterPageText: "共{0}页",
                displayInfo: true
            }],
        listeners: { 'itemclick': function (view, record, item, index, e) {
//        	var grid = this.getSelectionModel().getCount( );
//              Ext.MessageBox.alert("标题",grid);
            }
        },
//        store:{type:'VideoStore'}//奶奶的，用这种方式翻页功能出错,翻不了页，原因待查
        store:'sdkinte.store.sdk.SdkStore'

        })