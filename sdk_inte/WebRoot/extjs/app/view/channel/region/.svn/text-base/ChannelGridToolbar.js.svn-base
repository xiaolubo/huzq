Ext.define('sdkinte.view.channel.region.ChannelGridToolbar',{
	extend :'Ext.toolbar.Toolbar',
	alias : 'widget.channeltoolbar',
	controller : 'channel',
	defaults:{
	margin:'0 10 0 10'
	},
	initComponent:function(){
		this.items=[{
			text : '新增',
			glyph : 0xf016,
			handler:'addChannel'
			},{
			text : '修改',
			glyph : 0xf044,
			handler:'editChannel'
			},{
			text : '删除',
			glyph : 0xf014,
			handler:'deleteChannel'
			}];
		this.callParent();
	}
});