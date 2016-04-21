Ext.define('sdkinte.view.singleSdk.region.SdkGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.sdktoolbar',
	controller : 'singlesdk',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '新增',
			glyph : 0xf016,
			handler:'addSdk'
			},{
			text : '修改',
			glyph : 0xf044,
			handler:'editSdk'
			},{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteSdk'
			}];
		this.callParent();
	}
});