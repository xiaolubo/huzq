Ext.define("sdkinte.view.appsdk.region.AddAppsdkWin", {
    extend: "Ext.window.Window",
    alias: "widget.add_appsdk_Win",
    id:"add_appsdk_Win",
    controller: 'appsdk',
    title: "增加APP SDK",
    width: 420,
    closeAction:'close',  
    height: 290,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'add_appsdk_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.appsdk.region.addAppsdkForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.add_appsdk_Form',  
            id:'add_appsdk_Form',
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
                title: '增加APP SDK',
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
							id : 'app',
							valueField : 'id',
							displayField : 'name',
							store : 'sdkinte.store.app.SingleappStore'
			
						}
                        ]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '0 0 15 0',
                    items: [{
							xtype : 'button',
							 text : '请选择SDK',
							 handler : 'chooseAppsdkwin'
			
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
                    	xtype:"label",					
						name :"showsdkname",
						id :"showsdkname"
//						html:"<a href='#'><font color='#FF0000'>默认开通所有省份,权重为0</font></a>"
			
						
                    },{
						xtype: 'hiddenfield',
						name: 'sdkid'
					}]
                }]
            }
        ]
 })