Ext.define("sdkinte.view.appsdk.region.Appsdk", {
    extend: "Ext.window.Window",
    alias: "widget.appsdk_Win",
    id:"appsdk_Win",
    controller: 'appsdk',
    title: "集成sdk",
    width: 720,
    closeAction:'close',  
    height: 490,
    layout: "fit",
    modal: true,//屏蔽其他控件，只有这个窗体可操作  
//    frame:true, 
    initComponent : function() {  
    this.items = [{  
                            xtype : 'open_appsdk_Form',
                            viewModel : this.getViewModel(),  
                            formScheme : this.formScheme  
                        }]  ,
                this.callParent(arguments);  
    },
    buttons: [{
        text: '保存',
        handler: 'onSaveAppsdkInfClick'
    }],
     listeners:{
			    'close':function(win){
			    	this.destroy();
			    }		    
	}
});


//FORM
Ext.define('sdkinte.view.appsdk.region.openappsdkForm', {  
            extend : 'Ext.form.Panel',  
            alias : 'widget.open_appsdk_Form',  
            id:'open_appsdk_Form',
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
                title: 'sdk',
                border: 1,
                collapsible: true,
                items: [  {
                    xtype: 'container',
                    layout: 'hbox',
                    id : 'chooseappsdk_container',
                    items: [
                    {
				        xtype: 'hiddenfield',
				        name: 'chooseappname',
				        id : 'chooseappname'
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