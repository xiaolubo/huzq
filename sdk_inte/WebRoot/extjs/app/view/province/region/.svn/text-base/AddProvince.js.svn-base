Ext.define("sdkinte.view.province.region.AddProvince", {
    extend: "Ext.window.Window",
    alias: "widget.add_province_Win",
    id:"add_province_Win",
    controller: 'province',
    title: "增加省份",
    width: 420,
    closeAction:'close',  
    height: 230,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'add_province_Form',
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
        handler: 'onAddprovinceResetInfClick'
    }],
     listeners:{
			    'close':function(win){

			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.province.region.addProvinceForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.add_province_Form',  
            id:'add_province_Form',
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
                title: '增加省份信息',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        fieldLabel: '省份名称',
                        name: 'provinceName',
                        xtype: 'textfield',
                        blankText:'请输入省份名称',
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