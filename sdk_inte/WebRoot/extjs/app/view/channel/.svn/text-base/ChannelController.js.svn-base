/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.channel.ChannelController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.channel',
            requires: [
            'sdkinte.view.channel.region.AddChannel',
            'sdkinte.view.channel.region.EditChannel'
            ],
            
            addChannel :function(){
            	var win = Ext.getCmp('add_channel_Win');
            	if(win == null){
            		var w = Ext.widget("add_channel_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            editChannel  : function(){
            	var grid = Ext.getCmp('channel_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_channel_Win');
        				if(win == null){
		            		win = Ext.widget("edit_channel_Win"); 
		            	}
		            	var appform = Ext.getCmp('edit_channel_Form');
		            	    //appname
		            	    var id = rows[0].get('id'); 
		            	    var name = rows[0].get('channelname'); 
							var form = appform.getForm();
        					form.findField('channelname').setValue(name);
        					form.findField('id').setValue(id);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
            },
            
            onSaveEditInfClick : function(){
            	 var appform =  Ext.getCmp('edit_channel_Form');
             	 if(appform.form.isValid()){   
              		 appform .submit ({
	                    url : '../../sdk_inte/channel/updateChannel' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('channel_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_channel_Win');
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
            
            deleteChannel : function(){
            		var grid = Ext.getCmp('channel_grid');
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
	                        url: '../../sdk_inte/channel/delChannel',
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
            },
            
            onSaveInfClick : function(){
           	  var videoform =  Ext.getCmp('add_channel_Form');
              if(videoform.form.isValid()){   
              	   videoform .submit ({
	                    url : '../../sdk_inte/channel/addChannel' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('channel_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_channel_Win');
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
            
            onAddchannelResetInfClick : function(){
            	 var vidform =  Ext.getCmp('add_channel_Win');
                     vidform.reset();//重置form 
            }
            
        })  