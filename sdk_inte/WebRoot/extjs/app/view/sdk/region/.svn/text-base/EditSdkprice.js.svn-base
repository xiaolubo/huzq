Ext.define("sdkinte.view.sdk.region.EditSdkprice", {
    extend: "Ext.window.Window",
    alias: "widget.edit_sdkprice_Win",
    id:"edit_sdkprice_Win",
    controller: 'sdk',
    title: "修改SDK计费点",
    width: 520,
    closeAction:'close',  
    height: 390,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'edit_sdkprice_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveEditSdkpriceInfClick'
    }, {
        text: '重置',
        handler: 'onEditSdkpriceResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.sdk.region.editSdkpriceForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.edit_sdkprice_Form',  
            id:'edit_sdkprice_Form',
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
                title: '修改SDK计费信息',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
							xtype : 'combobox',
							fieldLabel: 'SDK',
							labelWidth : 30,
							name : 'sdk',
							valueField : 'id',
							displayField : 'sdkName',
							store : 'sdkinte.store.sdk.SinglesdkStore'
			
						}
                        ]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 15 0',
                    items: [{
							xtype : 'combobox',
							fieldLabel: '运营商',
							labelWidth : 30,
							name : 'operator',
							valueField : 'id',
							displayField : 'operatorName',
							store : 'sdkinte.store.operator.OperatorTotalStore'
			
						},{
						xtype: 'hiddenfield',
						name: 'id'
					}
                        ]
                }
//                ,{
//                    xtype: 'container',
//                    layout: 'hbox',
//                    margin: '0 0 15 0',
//                    items: [{
//							xtype : 'combobox',
//							fieldLabel: '省份',
//							labelWidth : 30,
//							name : 'province',
//							valueField : 'id',
//							displayField : 'provinceName',
//							store : 'sdkinte.store.province.ProvinceTotalStore'
//			
//						}
//                        ]
//                }
                ,{
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
                }
//                ,{
//                      xtype: 'container',
//                      layout: 'hbox',
//                      defaultType: 'radiofield', 
//                      labelAlign:'left',
//                       defaults: {
//			                flex: 1
//			            },
//                      items:[
//                     {
//                        fieldLabel: '权重(数值越大权重越大)',
//                        labelWidth : 100,
//                        name: 'level',
//                        xtype: 'textfield',
//                        blankText:'请输入权重',
//                        msgTarget:'side',
//                        allowBlank: false
//                    }]
//                }
                ]
            }
        ]
 })