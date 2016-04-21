/** 
 * 模块数据的主显示区域，继承自Grid 
 */  
  
Ext.define('sdkinte.view.province.ProvinceGrid', {  
            extend : 'Ext.grid.Panel',  
            alias : 'widget.provincegrid',  //不能跟id同名，否则用var grid = Ext.widget("usergrid");会报错
            id:'province_grid',//当用 var grid = Ext.widget("usergrid");获取到的grid无法正常调用grid的方法，增加id属性后，使用var grid = Ext.getCmp('user_grid');获取grid一切正常，不知原因所在
//            uses : ['cosplay.view.video.region.GridToolbar','cosplay.view.video.VideoModel'],  
            requires : [
	            'sdkinte.view.province.region.ProvinceGridToolbar'
//	            'sdkinte.view.province.region.EditProvince'
            ],
            controller : 'channel',  
            viewModel: 'channel',   
//            bind : {  
//                title : '{tf_title}' // 数据绑定到ModuleModel中的tf_title  
//               
//            },  
            dockedItems : [
            		{  
                        xtype : 'provincetoolbar', // 按钮toolbar  
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
            dataIndex: 'provinceName'
        }
        ],
        bbar: [{
                xtype: 'pagingtoolbar',
                store: 'sdkinte.store.province.ProvinceStore',
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
        store:'sdkinte.store.province.ProvinceStore'

        })