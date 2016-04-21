Ext.define('sdkinte.view.province.region.ProvinceGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.provincetoolbar',
	controller : 'province',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '新增',
			glyph : 0xf016,
			handler:'addProvince'
			},{
			text : '修改',
			glyph : 0xf044,
			handler:'editProvince'
			},{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteProvince'
			}];
		this.callParent();
	}
});