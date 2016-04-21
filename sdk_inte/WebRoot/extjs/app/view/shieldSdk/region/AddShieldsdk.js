Ext.define("sdkinte.view.shieldSdk.region.AddShieldsdk", {
    extend: "Ext.window.Window",
    alias: "widget.add_shieldsdk_Win",
    id:"add_shieldsdk_Win",
    controller: 'shieldSdk',
    title: "增加屏蔽SDK",
    width: 420,
    closeAction:'close',  
    height: 290,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'add_shieldsdk_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveshieldsdkInfClick'
    }, {
        text: '重置',
        handler: 'onAddshieldSdkResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.shieldSdk.region.addShieldSdkForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.add_shieldsdk_Form',  
            id:'add_shieldsdk_Form',
            closeAction:'close', 
            bodyPadding: 10,
            fileUpload: true,  
            frame:true,  //此值为true时，form   plain: true,才可保持背景色一致
            defaults: {
		        anchor: '100%'
		    },
            fieldDefaults: {
	        labelWidth: 80,
	        labelAlign: "left",
	        flex: 1,
	        margin: 5
	       },
	                 items: [
           {
                xtype: 'fieldset',
                title: '增加屏蔽SDK',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
							xtype : 'combobox',
							fieldLabel: '渠道',
							labelWidth : 30,
							name : 'channel',
							valueField : 'id',
							displayField : 'channelname',
							store : 'sdkinte.store.channel.ChannelTotalStore'
			
						},{
							xtype : 'button',
							fieldLabel: '选择SDK',
							 handler:'openShieldsdkWin'
						},{
							xtype: 'hiddenfield',
							name: 'sdkid'
						}
                        ]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
					
	                        name: 'choosesdkname',
	                        xtype: 'label',
	                        id : 'choosesdkname'
						}
                        ]
                }]
            }
        ]
 })