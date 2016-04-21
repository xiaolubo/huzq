/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.app.AppController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.app',
            requires: [
            'sdkinte.view.app.region.AddAppprice',
            'sdkinte.view.app.region.EditAppprice'
            ],
            
            addAppprice : function(){
            	var win = Ext.getCmp('add_appprice_Win');
            	if(win == null){
            		var w = Ext.widget("add_appprice_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            editAppprice : function(){
            	var grid = Ext.getCmp('app_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_appprice_Win');
        				if(win == null){
		            		win = Ext.widget("edit_appprice_Win"); 
		            	}
		            	var appform = Ext.getCmp('edit_appprice_Form');
		            	    //appname
		            	    var id = rows[0].get('id'); 
		            	    var name = rows[0].get('name'); 
		            	    var channel = rows[0].get('channel'); 
		            	    var price = rows[0].get('price'); 
							var form = appform.getForm();
        					form.findField('app').setValue(name);
        					form.findField('channel').setValue(channel);
        					form.findField('price').setValue(price);
        					form.findField('id').setValue(id);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
            },
            
            //保存修改后的appprice
            onSaveEditInfClick : function(){
            	 var appform =  Ext.getCmp('edit_appprice_Form');
             	 if(appform.form.isValid()){   
              		 appform .submit ({
	                    url : '../../sdk_inte/app/updateAppprice' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('app_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_appprice_Win');
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
            
            onSaveInfClick : function(){
            	 var apppriceform =  Ext.getCmp('add_appprice_Form');
              if(apppriceform.form.isValid()){   
              	   apppriceform .submit ({
	                    url : '../../sdk_inte/app/addAppprice' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('app_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_appprice_Win');
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
            
            deleteAppprice : function(){
            		var grid = Ext.getCmp('app_grid');
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
	                        url: '../../sdk_inte/app/delAppprice',
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