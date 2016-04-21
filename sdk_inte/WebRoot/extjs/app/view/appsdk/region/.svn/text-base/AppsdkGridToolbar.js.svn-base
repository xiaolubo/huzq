Ext.define('sdkinte.view.appsdk.region.AppsdkGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.appsdktoolbar',
	controller : 'appsdk',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '选择SDK',
			 iconCls: 'icon-plus',
			handler:'chooseappsdk'
			},{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteappsdk'
			}];
		this.callParent();
	}
});