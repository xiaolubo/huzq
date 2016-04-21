Ext.define('sdkinte.view.operator.region.OperatorGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.operatortoolbar',
	controller : 'operator',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '新增',
			glyph : 0xf016,
			handler:'addOperator'
			},{
			text : '修改',
			glyph : 0xf044,
			handler:'editOperator'
			},{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteOperator'
			}];
		this.callParent();
	}
});