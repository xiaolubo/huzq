Ext.define('sdkinte.view.singleApp.region.AppGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.apptoolbar',
	controller : 'singleApp',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '新增',
			glyph : 0xf016,
			handler:'addApp'
			},{
			text : '修改',
			glyph : 0xf044,
			handler:'editApp'
			},{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteApp'
			}];
		this.callParent();
	}
});