Ext.define("sdkinte.view.singleSdk.region.EditSdk", {
    extend: "Ext.window.Window",
    alias: "widget.edit_sdk_Win",
    id:"edit_sdk_Win",
    controller: 'singlesdk',
    title: "修改SDK",
    width: 420,
    closeAction:'close',  
    height: 290,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'edit_sdk_Form',
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
        handler: 'onEditSdkResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.singleSdk.region.editSdkForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.edit_sdk_Form',  
            id:'edit_sdk_Form',
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
                title: '修改SDK信息',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        fieldLabel: 'SDK名称',
                        name: 'sdkName',
                        xtype: 'textfield',
                        blankText:'请输入SDK名称',
                        msgTarget:'side',
                        allowBlank: false
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
                        fieldLabel: 'SDK ID',
                        name: 'sdkid',
                         xtype: 'numberfield',
	                    minValue:0,
                        value: 0,
                        blankText:'请输入SDK ID',
                        msgTarget:'side',
                        allowBlank: false
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
	                        xtype: 'radiogroup',
				            fieldLabel: '是否开通',
				            labelWidth:60,
				            items: [
									{ boxLabel: '是', name: 'isOpen', inputValue: '1', checked: true },
						            { boxLabel: '否', name: 'isOpen', inputValue: '0'}
				            ]
                      }]
                }]
            }
        ]
 })