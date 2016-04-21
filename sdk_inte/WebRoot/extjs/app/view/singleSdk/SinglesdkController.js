/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.singleSdk.SinglesdkController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.singlesdk',
            requires: [
            'sdkinte.view.singleSdk.region.AddSdk',
            'sdkinte.view.singleSdk.region.EditSdk'
            ],
            
            addSdk : function(){
            	var win = Ext.getCmp('add_sdk_Win');
            	if(win == null){
            		var w = Ext.widget("add_sdk_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            //增加sdk重置
            onAddSdkResetInfClick : function(){
            	 var vidform =  Ext.getCmp('add_sdk_Form');
                     vidform.reset();//重置form 
            },
            
             //修改sdk重置
            onEditSdkResetInfClick : function(){
            	 var vidform =  Ext.getCmp('edit_sdk_Form');
                     vidform.reset();//重置form 
            },
            
            editSdk : function(){
            	var grid = Ext.getCmp('singlesdk_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_sdk_Win');
        				if(win == null){
		            		win = Ext.widget("edit_sdk_Win"); 
		            	}
		            	var sdkform = Ext.getCmp('edit_sdk_Form');
		            	
		            	    var sdkid = rows[0].get('sdkid'); 
		            	     var sdkName = rows[0].get('sdkName'); 
		            	      var isOpen = rows[0].get('isOpen'); 
		            	       var id = rows[0].get('id'); 
							var form = sdkform.getForm();
        					form.findField('sdkName').setValue(sdkName);
        					form.findField('sdkid').setValue(sdkid);
        					form.findField('isOpen').setValue(isOpen);
        					form.findField('id').setValue(id);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
            },
            
            onSaveInfClick : function(){
            	 var videoform =  Ext.getCmp('add_sdk_Form');
                 if(videoform.form.isValid()){   
              	   videoform .submit ({
	                    url : '../../sdk_inte/sdk/addSdk' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('singlesdk_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_sdk_Win');
//	                       vidWin.close();
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
            },
            
            //保存修改后的sdk
            onSaveEditInfClick : function(){
            	 var sdkform =  Ext.getCmp('edit_sdk_Form');
             	 if(sdkform.form.isValid()){   
              		 sdkform .submit ({
	                    url : '../../sdk_inte/sdk/updateSdk' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('singlesdk_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_sdk_Win');
	                       vidWin.close();
	                    },
	                    failure: function(form, action) {
				          switch (action.failureType) {
				            case Ext.form.action.Action.CLIENT_INVALID:
				                Ext.Msg.alert('Failure!', 'Form fields may not be submitted with invalid values');
				                break;
				            case Ext.form.action.Action.CONNECT_FAILURE:
				                Ext.Msg.alert('Failure!!', '连接超时');
				                break;
				            case Ext.form.action.Action.SERVER_INVALID:
				               Ext.Msg.alert('Failure!!!', action.result.msg);
				       }
				    }
                  });
             	 }
            },
            
            deleteSdk : function(){
           		 var grid = Ext.getCmp('singlesdk_grid');
	          	var isselected = grid.getSelectionModel().hasSelection();
	          	if(isselected){
	          	    Ext.Msg.confirm("请确认", "是否真的要删除数据？", function(button, text) {  
	          	    if(button == "yes"){
          		           var rows = grid.getSelectionModel().getSelection();
	//       	          Ext.Msg.alert('信息', rows);
	                      var msg = "";
	                      for (var i = 0; i < rows.length; i++) {
	                      	
	                          msg = msg + rows[i].get('id')+',';
	                      } 
	                      Ext.Ajax.request({
	                        url: '../../sdk_inte/sdk/delSdk',
	                        params: {
	                            id: msg
	                      },
	                      success: function(response){
	                         var text = response.responseText;
	                         grid.getStore().reload();
	                      }
	                      });
	          	      }
	          	    })
	          	}else{
	          	   Ext.Msg.alert('信息', "请选择数据！");
	          	}
            }
            
        })  
        
        
        function changesdkState(val){
        	var grid = Ext.getCmp('singlesdk_grid');
        	var id = val;
        	Ext.Ajax.request({
	                        url: '../../sdk_inte/sdk/changeSdkState',
	                        params: {
	                            id: id
	                      },
	                      success: function(response){
	                         var text = response.responseText;
	                         grid.getStore().reload();
	                      }
	                      });
        }