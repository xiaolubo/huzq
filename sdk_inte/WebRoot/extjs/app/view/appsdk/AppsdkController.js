/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.appsdk.AppsdkController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.appsdk',
            requires: [
            		'sdkinte.view.appsdk.region.ChooseSdkWin',
            		'sdkinte.view.appsdk.region.AddAppsdkWin',
            		'sdkinte.view.appsdk.region.Appsdk'
            ],
            
            chooseappsdk : function(){
            	 var win = Ext.getCmp('add_appsdk_Win');
            	if(win == null){
            		var w = Ext.widget("add_appsdk_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            chooseAppsdkwin : function(){
             	var win = Ext.getCmp('choose_sdk_win');
            	if(win == null){
            		var w = Ext.widget("choose_sdk_win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
            chooseAppsdkConfirm : function(){
            	var choose_sdk_grid =  Ext.getCmp('choose_sdk_grid');
            	var rowSelectionModel = choose_sdk_grid.getSelectionModel(); 
				if (rowSelectionModel.hasSelection()) {  
//					  var record = rowSelectionModel.getLastSelected();
					  var str = '';
					  var sdkname = '';
					  var record = rowSelectionModel.getSelection();
					  for(var i = 0; i < record.length; i++){   
					  	  str = str + record[i].get('id')+',';
					  	  sdkname = sdkname + record[i].get('sdkName')+',';
					  };
					var sdkform = Ext.getCmp('add_appsdk_Form');
					var form = sdkform.getForm();
					form.findField('sdkid').setValue(str);
					var showsdkname =  Ext.getCmp('showsdkname');
					showsdkname.setText("您选择的SDK："+sdkname);
                  	var win = Ext.getCmp('choose_sdk_win');
                  	win.close();
//					    Ext.Ajax.request({
//                        url: '../../sdk_inte/appsdk/chooseAppsdk',
//                        params: {
//                            id: str
//                      },
//                      success: function(response){
////                      		var appsdk_grid =  Ext.getCmp('appsdk_grid');
////                         	appsdk_grid.getStore().reload();
//                      	   
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
            
            
            onSaveInfClick : function(){
            	 var apppriceform =  Ext.getCmp('add_appsdk_Form');
              if(apppriceform.form.isValid()){   
              	   apppriceform .submit ({
	                    url : '../../sdk_inte/appsdk/chooseAppsdk',
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('appsdk_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
	                       var vidWin =  Ext.getCmp('add_appsdk_Win');
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
            },
            
            
            deleteappsdk : function(){
          		  var grid = Ext.getCmp('appsdk_grid');
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
	                        url: '../../sdk_inte/appsdk/delAppsdkset',
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
            
            onSaveAppsdkInfClick : function(){
            	var app = Ext.getCmp('chooseappname');
	            var appname = app.getValue();
            	var hobbyValue = Ext.getCmp('choosesdk').getChecked();
                     var val = '';
                     Ext.Array.each(hobbyValue, function(item){
                        val +=  item.inputValue+',';
                     });
//                     alert(appname+val);
            	 Ext.Ajax.request({
	                        url: '../../sdk_inte/appsdk/changeAppSdkSet',
	                        params: {
	                            id: val,
	                            appname:appname
	                      },
	                      success: function(response){
	                      		var win = Ext.getCmp('appsdk_Win');
	                      		win.close();
	                      },
	                      failure: function (response,options){  
	                      		Ext.Msg.alert('提示','修改失败!');   
	                      }
	                     
	            });
            }
           
            
            
            
        })  
        
        
        
       function openAppsdkWin(val){
        	  	var win = Ext.getCmp('appsdk_Win');
	            	if(win == null){
	            		var w = Ext.widget("appsdk_Win"); 
//	            		w.show();
	            	}
	            	var pro_con = Ext.getCmp('chooseappsdk_container');
	            	var app = Ext.getCmp('chooseappname');
	            	app.setValue(val);
       	     		Ext.Ajax.request({
						url : '../../sdk_inte/appsdk/getAppsdk?val='+val,
						callback : function(options,success,response){
						var result=Ext.util.JSON.decode(response.responseText);
						if(success == true){
							var str = '[';
							for(var i=0;i<result.totalCount;i++){
								//{boxLabel:'专用通知',inputValue:1,checked:true},
//								str += result.rows[i].id;
								if(i == result.totalCount-1){
									str += "{boxLabel:'"+result.rows[i].sdkname+"',checked:"+result.rows[i].check+",inputValue:"+result.rows[i].id+"}";
								}else{
									str += "{boxLabel:'"+result.rows[i].sdkname+"',checked:"+result.rows[i].check+",inputValue:"+result.rows[i].id+"},";
								}
								
							}
							str += ']';
							var itemsGroup = new Ext.form.CheckboxGroup({
								 id : 'choosesdk',
								 fieldLabel : '',
								 columns:6,
   			 					 flex: 1,
   			 					 allowBlank : false,
   			 					 items :eval(str) 
							 });
        					pro_con.add(itemsGroup);
        					pro_con.doLayout();
//							alert(str);
						}
						}
					});
					
					
       		 var win = Ext.getCmp('appsdk_Win');
            	if(win == null){
            		var w = Ext.widget("appsdk_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
        }