Ext.define("sdkinte.view.sdk.region.Province", {
    extend: "Ext.window.Window",
    alias: "widget.open_province_Win",
    id:"open_province_Win",
    controller: 'sdk',
    title: "开通省份",
    width: 720,
    closeAction:'close',  
    height: 490,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'open_province_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveProvinceInfClick'
    }],
     listeners:{
			    'close':function(win){
			    	this.destroy();
			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.sdk.region.openprovinceForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.open_province_Form',  
            id:'open_province_Form',
            closeAction:'close', 
            bodyPadding: 10,
            fileUpload: true,  
            frame:true,  //此值为true时，form   plain: true,才可保持背景色一致
            defaults: {
		        anchor: '100%'
		    },
            fieldDefaults: {
//	        labelWidth: 80,
	        labelAlign: "left",
	        flex: 1
//	        margin: 5
	       },
	                 items: [
           {
                xtype: 'fieldset',
                title: '开通省份',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    id : 'province_container',
                    items: [
                    {
				        xtype: 'hiddenfield',
				        name: 'sdkpriceinfo',
				        id : 'sdkpriceinfo'
				    },
                    	{
//							xtype:'checkboxgroup',
//							name:'openprovince',
//							id : 'openprovince',
//							columns: 6,
//							fieldLabel:'开通省份',
//							
//							items:[
//							{boxLabel:'专用通知',inputValue:1,checked:true,height:20},{fieldLabel: '',labelWidth :0,width:50,name: 'level1',id : 'level1',xtype:'textfield',value:''},
//							{boxLabel:'专用通知',inputValue:2,checked:true},{fieldLabel: '',labelWidth :0,width:50,name: 'level2',xtype:'textfield',value:''},
//							{boxLabel:'会议纪要',inputValue:3},{fieldLabel: '',labelWidth :0,width:50,name: 'level3',xtype:'textfield',value:''},
//							{boxLabel:'会议纪要',inputValue:3},{fieldLabel: '',labelWidth :0,width:50,name: 'level4',xtype:'textfield',value:''},
//							{boxLabel:'会议纪要',inputValue:3},{fieldLabel: '',labelWidth :0,width:50,name: 'level5',xtype:'textfield',value:''},
//							{boxLabel:'会议纪要',inputValue:3},{fieldLabel: '',labelWidth :0,width:50,name: 'level6',xtype:'textfield',value:''},
//							{boxLabel:'会议纪要',inputValue:3},{fieldLabel: '',labelWidth :0,width:50,name: 'level7',xtype:'textfield',value:''}
//							]
						}
                        ]
                }]
            }
        ]
 })