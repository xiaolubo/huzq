Ext.define("sdkinte.view.operator.region.AddOperator", {
    extend: "Ext.window.Window",
    alias: "widget.add_operator_Win",
    id:"add_operator_Win",
    controller: 'operator',
    title: "增加运营商",
    width: 420,
    closeAction:'close',  
    height: 230,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'add_operator_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveInfClick'
    }, {
        text: '重置',
        handler: 'onAddOperatorResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.operator.region.addOperatorForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.add_operator_Form',  
            id:'add_operator_Form',
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
                title: '增加运营商信息',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        fieldLabel: '运营商名称',
                        name: 'operatorname',
                        xtype: 'textfield',
                        blankText:'请输入运营商名称',
                        msgTarget:'side',
                        allowBlank: false
                    }
                        ]
                }
//              
              ]
            }
        ]


 })