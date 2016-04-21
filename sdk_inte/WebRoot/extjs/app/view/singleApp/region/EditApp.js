Ext.define("sdkinte.view.singleApp.region.EditApp", {
    extend: "Ext.window.Window",
    alias: "widget.edit_app_Win",
    id:"edit_app_Win",
    controller: 'singleApp',
    title: "修改APP",
    width: 420,
    closeAction:'close',  
    height: 230,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'edit_app_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onEditSaveAppClick'
    }, {
        text: '重置',
        handler: 'onEditAppResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.singleApp.region.EditAppForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.edit_app_Form',  
            id:'edit_app_Form',
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
                title: '修改APP信息',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        fieldLabel: 'APP名称',
                        name: 'appname',
                        xtype: 'textfield',
                        blankText:'请输入APP名称',
                        msgTarget:'side',
                        allowBlank: false
                    },{
						xtype: 'hiddenfield',
						name: 'id'
					}
                        ]
                }
//              
              ]
            }
        ]


 })