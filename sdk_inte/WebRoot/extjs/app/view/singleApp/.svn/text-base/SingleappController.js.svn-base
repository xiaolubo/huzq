/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.singleApp.SingleappController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.singleApp',
            requires: [
            'sdkinte.view.singleApp.region.AddApp',
            'sdkinte.view.singleApp.region.EditApp'
            ],
            
             addApp : function(){
            	var win = Ext.getCmp('add_app_Win');
            	if(win == null){
            		var w = Ext.widget("add_app_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            //增加app重置
            onAddAppResetInfClick : function(){
            	 var vidform =  Ext.getCmp('add_app_Form');
                     vidform.reset();//重置form 
            },
            
            editApp : function(){
         		var grid = Ext.getCmp('singleApp_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_app_Win');
        				if(win == null){
		            		win = Ext.widget("edit_app_Win"); 
		            	}
		            	var appform = Ext.getCmp('edit_app_Form');
		            	    //appname
		            	    var id = rows[0].get('id'); 
		            	    var name = rows[0].get('name'); 
							var form = appform.getForm();
        					form.findField('appname').setValue(name);
        					form.findField('id').setValue(id);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
            },
            
            onEditSaveAppClick : function(){
            	 var appform =  Ext.getCmp('edit_app_Form');
             	 if(appform.form.isValid()){   
              		 appform .submit ({
	                    url : '../../sdk_inte/app/updateApp' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('singleApp_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_app_Win');
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
            
            //修改app重置
            onEditAppResetInfClick : function(){
            	 var vidform =  Ext.getCmp('edit_app_Form');
                     vidform.reset();//重置form 
            },
            
            onSaveInfClick : function(){
            	 var videoform =  Ext.getCmp('add_app_Form');
              if(videoform.form.isValid()){   
              	   videoform .submit ({
	                    url : '../../sdk_inte/app/addApp' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('singleApp_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_app_Win');
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
            
            deleteApp : function(){
            	var grid = Ext.getCmp('singleApp_grid');
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
	                        url: '../../sdk_inte/app/delApp',
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