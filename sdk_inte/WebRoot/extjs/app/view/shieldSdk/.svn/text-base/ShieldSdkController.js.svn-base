/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.shieldSdk.ShieldSdkController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.shieldSdk',
            requires: [
            'sdkinte.view.shieldSdk.region.ChooseShieldsdkWin',
            'sdkinte.view.shieldSdk.region.AddShieldsdk',
            'sdkinte.view.shieldSdk.ShieldSdkGrid'
            ],
            
            chooseShieldsdk : function(){
          	   var win = Ext.getCmp('add_shieldsdk_Win');
            	if(win == null){
            		var w = Ext.widget("add_shieldsdk_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            openShieldsdkWin : function(){
           		 var win = Ext.getCmp('choose_shieldsdk_win');
            	if(win == null){
            		var w = Ext.widget("choose_shieldsdk_win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            chooseShieldsdkConfirm : function(){
           		 var choose_video_grid =  Ext.getCmp('choose_shieldsdk_grid');
            	var rowSelectionModel = choose_video_grid.getSelectionModel(); 
				if (rowSelectionModel.hasSelection()) {  
//					  var record = rowSelectionModel.getLastSelected();
					  var str = '';
					  var sdknamelist ='';
					  var record = rowSelectionModel.getSelection();
					  for(var i = 0; i < record.length; i++){   
					  	  str = str + record[i].get('id')+',';
					  	  sdknamelist += record[i].get('sdkName')+',';
					  };
					  
					  
					   	var sdkform = Ext.getCmp('add_shieldsdk_Form');
					   	var form = sdkform.getForm();
					   	form.findField('sdkid').setValue(str);
//					   	form.findField('choosesdkname').setValue(sdknamelist);
					   	var choosesdknamelabel = Ext.getCmp('choosesdkname');
					   	choosesdknamelabel.setText("您选择的SDK分别是:"+sdknamelist);
				   		var win = Ext.getCmp('choose_shieldsdk_win');
                      	win.close();
//					    Ext.Ajax.request({
//                        url: '../../sdk_inte/channel/chooseShieldsdk',
//                        params: {
//                            id: str
//                      },
//                      success: function(response){
//                      		var banner_grid =  Ext.getCmp('shieldSdk_grid');
//                         	banner_grid.getStore().reload();
//	                      	var win = Ext.getCmp('choose_shieldsdk_win');
//	                      	win.close();
//                      }
//                      });
//					  alert(str);
				}else{
					Ext.MessageBox.show({   
                        title:"提示",   
                        msg:"请先选择您要操作的行!"  
                     });
                     return;
				}
            },
            
            onSaveshieldsdkInfClick : function(){
           		  var videoform =  Ext.getCmp('add_shieldsdk_Form');
                 if(videoform.form.isValid()){   
              	   videoform .submit ({
	                    url : '../../sdk_inte/channel/chooseShieldsdk' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('shieldSdk_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','屏蔽成功！');  
	                       var vidWin =  Ext.getCmp('add_shieldsdk_Win');
	                       vidWin.close();
	                    },
	                    failure: function(form, action) {
				          switch (action.failureType) {
				            case Ext.form.action.Action.CLIENT_INVALID:
				                Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
				                break;
				            case Ext.form.action.Action.CONNECT_FAILURE:
				                Ext.Msg.alert('Failure', 'Ajax communication failed');
				                break;
				            case Ext.form.action.Action.SERVER_INVALID:
				               Ext.Msg.alert('Failure', action.result.msg);
				       }
				    }
                  });

             }
            }
            
           
            
            
        })  
        
        
        function cancelshield(val){
        	var grid = Ext.getCmp('shieldSdk_grid');
        	var id = val;
        	Ext.Ajax.request({
	                        url: '../../sdk_inte/channel/cancelshieldSdk',
	                        params: {
	                            id: id
	                      },
	                      success: function(response){
//	                         var text = response.responseText;
	                         grid.getStore().reload();
	                      }
	                      });
        }