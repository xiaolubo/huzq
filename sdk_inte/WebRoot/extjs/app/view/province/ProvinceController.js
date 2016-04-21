/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.province.ProvinceController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.province',
            requires: [
            'sdkinte.view.province.region.AddProvince',
            'sdkinte.view.province.region.EditProvince'
            ]
            ,
            addProvince : function(){
            	var win = Ext.getCmp('add_province_Win');
            	if(win == null){
            		var w = Ext.widget("add_province_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            onSaveInfClick : function(){
            	 var videoform =  Ext.getCmp('add_province_Form');
                 if(videoform.form.isValid()){   
              	   videoform .submit ({
	                    url : '../../sdk_inte/province/addProvince' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('province_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_province_Win');
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
            
            editProvince : function(){
            	var grid = Ext.getCmp('province_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_province_Win');
        				if(win == null){
		            		win = Ext.widget("edit_province_Win"); 
		            	}
		            	var appform = Ext.getCmp('edit_province_Form');
		            	    var id = rows[0].get('id'); 
		            	    var name = rows[0].get('provinceName'); 
							var form = appform.getForm();
        					form.findField('provinceName').setValue(name);
        					form.findField('id').setValue(id);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
            },
            
            onSaveeditInfClick : function(){
            	 var appform =  Ext.getCmp('edit_province_Form');
             	 if(appform.form.isValid()){   
              		 appform .submit ({
	                    url : '../../sdk_inte/province/updateProvince' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('province_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_province_Win');
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
            
            deleteProvince : function(){
            	var grid = Ext.getCmp('province_grid');
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
	                        url: '../../sdk_inte/province/delProvince',
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