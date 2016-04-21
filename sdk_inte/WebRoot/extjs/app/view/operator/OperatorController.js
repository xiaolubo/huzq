/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.operator.OperatorController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.operator',
            requires: [
            'sdkinte.view.operator.region.AddOperator',
            'sdkinte.view.operator.region.EditOperator'
            ],
            
			addOperator : function(){
				var win = Ext.getCmp('add_operator_Win');
            	if(win == null){
            		var w = Ext.widget("add_operator_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
			},
			
			editOperator : function(){
				var grid = Ext.getCmp('operator_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_operator_Win');
        				if(win == null){
		            		win = Ext.widget("edit_operator_Win"); 
		            	}
		            	var appform = Ext.getCmp('edit_operator_Form');
		            	    //appname
		            	    var id = rows[0].get('id'); 
		            	    var name = rows[0].get('operatorName'); 
							var form = appform.getForm();
        					form.findField('operatorname').setValue(name);
        					form.findField('id').setValue(id);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
			},
			
			onEditOperatorResetInfClick : function(){
				 var vidform =  Ext.getCmp('edit_operator_Form');
                     vidform.reset();//重置form 
			},
			
			onSaveInfClick : function(){
				 var videoform =  Ext.getCmp('add_operator_Form');
              if(videoform.form.isValid()){   
              	   videoform .submit ({
	                    url : '../../sdk_inte/operator/addOperator' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('operator_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_operator_Win');
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
			
			onSaveEditInfClick : function(){
				 var appform =  Ext.getCmp('edit_operator_Form');
             	 if(appform.form.isValid()){   
              		 appform .submit ({
	                    url : '../../sdk_inte/operator/updateOperator' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('operator_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_operator_Win');
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
			
			onAddOperatorResetInfClick : function(){
				 var vidform =  Ext.getCmp('add_operator_Form');
                     vidform.reset();//重置form 
			},
			
			deleteOperator : function(){
					var grid = Ext.getCmp('operator_grid');
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
	                        url: '../../sdk_inte/operator/delOperator',
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