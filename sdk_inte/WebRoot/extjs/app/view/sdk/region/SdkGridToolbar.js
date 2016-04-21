Ext.define('sdkinte.view.sdk.region.SdkGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.sdkpricetoolbar',
	controller : 'sdk',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '新增',
			glyph : 0xf016,
			handler:'addSdkprice'
			}
//			,{
//			text : '修改',
//			glyph : 0xf044,
//			handler:'editSdkprice'
//			}
			,{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteSdkprice'
			}
			
//			,{
//			text : 'SDK计费点导入',
//			glyph : 0xf014,
//			handler:'importSdkprice'
//			}
			];
		this.callParent();
	}
});