Ext.define("sdkinte.view.app.region.EditAppprice", {
    extend: "Ext.window.Window",
    alias: "widget.edit_appprice_Win",
    id:"edit_appprice_Win",
    controller: 'app',
    title: "修改APP计费点",
    width: 420,
    closeAction:'close',  
    height: 290,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'edit_appprice_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveEditInfClick'
    }, {
        text: '重置',
        handler: 'onEditApppriceResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.app.region.editApppriceForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.edit_appprice_Form',  
            id:'edit_appprice_Form',
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
                title: '修改APP计费信息',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
							xtype : 'combobox',
							fieldLabel: 'APP',
							labelWidth : 30,
							name : 'app',
//							hiddenName : 'app',
							id : 'app',
							valueField : 'id',
							
							displayField : 'name',
							store : 'sdkinte.store.app.SingleappStore'
			
						},{
						xtype: 'hiddenfield',
						name: 'id'
					}
                        ]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 15 0',
                    items: [{
							xtype : 'combobox',
							fieldLabel: '渠道',
							labelWidth : 30,
							name : 'channel',
							id : 'channel',
							valueField : 'id',
							displayField : 'channelname',
							store : 'sdkinte.store.channel.ChannelTotalStore'
			
						}
                        ]
                },{
                      xtype: 'container',
                      layout: 'hbox',
                      defaultType: 'radiofield', 
                      labelAlign:'left',
                       defaults: {
			                flex: 1
			            },
                      items:[
                     {
                        fieldLabel: '计费点(单位:分)',
                        labelWidth : 100,
                        name: 'price',
                       xtype: 'numberfield',
	                    minValue:0,
                        value: 0,
                         step:100,  
                        blankText:'请输入计费点',
                        msgTarget:'side',
                        allowBlank: false
                    }]
                }]
            }
        ]
 })