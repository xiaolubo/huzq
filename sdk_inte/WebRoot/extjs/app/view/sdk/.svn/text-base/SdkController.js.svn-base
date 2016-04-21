/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.sdk.SdkController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.sdk',
            requires: [
            'sdkinte.view.sdk.region.AddSdkprice',
            'sdkinte.view.sdk.region.EditSdkprice',
            'sdkinte.view.sdk.region.Province'
            ],
            
            addSdkprice : function(){
           		 var win = Ext.getCmp('add_sdkprice_Win');
            	if(win == null){
            		var w = Ext.widget("add_sdkprice_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
            },
            
           
            
            editSdkprice : function(){
            	var grid = Ext.getCmp('sdk_grid');
        		var isselected = grid.getSelectionModel().hasSelection();
        		if(isselected){
        			var rows = grid.getSelectionModel().getSelection();
        			var count =rows.length;
        			if(count > 1){
        				Ext.Msg.alert('信息', "请选择一条数据！");
        			}else{
        				
        				var win = Ext.getCmp('edit_sdkprice_Win');
        				if(win == null){
		            		win = Ext.widget("edit_sdkprice_Win"); 
		            	}
		            	var appform = Ext.getCmp('edit_sdkprice_Form');
		            	    //appname
		            	    var id = rows[0].get('id'); 
		            	    var name = rows[0].get('name'); 
		            	    var operatorName = rows[0].get('operatorName'); 
		            	    var provinceName = rows[0].get('provinceName'); 
		            	    var price = rows[0].get('price'); 
		            	     var level = rows[0].get('level'); 
							var form = appform.getForm();
        					
        					form.findField('id').setValue(id);
        					form.findField('sdk').setValue(name);
        					form.findField('operator').setValue(operatorName);
        					form.findField('province').setValue(provinceName);
        					form.findField('price').setValue(price);
        					form.findField('level').setValue(level);
		            		win.show();
        			}
        		}else{
        		  	Ext.Msg.alert('信息', "请选择数据！");
        		}
            },
            //保存修改后的sdkprice
            onSaveEditSdkpriceInfClick : function(){
            	 var appform =  Ext.getCmp('edit_sdkprice_Form');
             	 if(appform.form.isValid()){   
              		 appform .submit ({
	                    url : '../../sdk_inte/sdk/updateSdkprice' ,
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('sdk_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','修改成功！');  
	                       var vidWin =  Ext.getCmp('edit_sdkprice_Win');
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
            
            onEditSdkpriceResetInfClick : function(){
            	 var vidform =  Ext.getCmp('edit_sdkprice_Form');
                     vidform.reset();//重置form 
            },
            
            onSaveSdkpriceInfClick : function(){
            	 var sdkpriceform =  Ext.getCmp('add_sdkprice_Form');
                 if(sdkpriceform.form.isValid()){   
              	   sdkpriceform .submit ({
	                    url : '../../sdk_inte/sdk/addSdkprice' ,
	                    timeout:2000000, 
	                    waitMsg : 'waiting...' ,
	                    success : function ( fp , o ) {
	                       var grid = Ext.getCmp('sdk_grid');
	                       grid.getStore().reload();
	                       Ext.MessageBox.alert('提示','增加成功！');  
//	                       var vidWin =  Ext.getCmp('add_sdkprice_Win');
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
            
            deleteSdkprice : function(){
            	var grid = Ext.getCmp('sdk_grid');
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
	                        url: '../../sdk_inte/sdk/delSdkprice',
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
            
            onSaveProvinceInfClick : function(){
//            	var provinceform =  Ext.getCmp('open_province_Form');
//            	var form = provinceform.getForm();
//            	var FileItype = form.findField('province').items;
            	var spinfo = Ext.getCmp('sdkpriceinfo');
	            var sdkpriceinfo = spinfo.getValue();
            	var hobbyValue = Ext.getCmp('openprovince').getChecked();
                     var val = '';
                     Ext.Array.each(hobbyValue, function(item){
                        var level = Ext.getCmp('pro'+item.inputValue).getValue();
                        val +=  item.inputValue+'@_@'+level+',';
                     });
                     
            	 Ext.Ajax.request({
	                        url: '../../sdk_inte/sdk/changeSdkpricePro',
	                        params: {
	                            id: val,
	                            sp:sdkpriceinfo
	                      },
	                      success: function(response){
	                        //open_province_Win
	                      		var win = Ext.getCmp('open_province_Win');
	                      		win.close();
	                      },
	                      failure: function (response,options){  
	                      		Ext.Msg.alert('提示','修改失败!');   
	                      }
	                     
	            });
            },
            
            searchSdk : function(){
            		var toolbar = Ext.getCmp('sdk_GBBarSea');
    				var sdkname =  toolbar.getComponent('sdkname').getValue();
    				var operator =  toolbar.getComponent('operator').getValue();
    				var price =  toolbar.getComponent('price').getValue();
    			
//    				var isFree =  toolbar.getComponent('isFree').getValue();
             	  //store 加载之前将参数放进去以待后台获取
			    	var grid = Ext.getCmp('sdk_grid');
			    	var store = grid.getStore();
			    	store.on('beforeload', function (store, options) {
				        Ext.apply(store.proxy.extraParams, {"sdkname":sdkname,"operator":operator,"price":price});
			        });
			    	store.load();  
            }
            
         
            
        })  
        
        
        function changeIsshield(cid){
        	var grid = Ext.getCmp('sdk_grid');
        	var id = cid;
        	Ext.Ajax.request({
	                        url: '../../sdk_inte/sdk/changeIsshield',
	                        params: {
	                            id: id
	                      },
	                      success: function(response){
	                         var text = response.responseText;
	                         grid.getStore().reload();
	                      }
	                      });
        }
        
        
       function openProvinceWin (val){
//       		alert(val);
	     		  	var win = Ext.getCmp('open_province_Win');
	            	if(win == null){
	            		var w = Ext.widget("open_province_Win"); 
//	            		w.show();
	            	}
	            	var pro_con = Ext.getCmp('province_container');
	            	var spinfo = Ext.getCmp('sdkpriceinfo');
	            	spinfo.setValue(val);
       	     		Ext.Ajax.request({
						url : '../../sdk_inte/province/getProvinceToTal2?val='+val,
						callback : function(options,success,response){
						var result=Ext.util.JSON.decode(response.responseText);
						if(success == true){
							var str = '[';
							for(var i=0;i<result.totalCount;i++){
								//{boxLabel:'专用通知',inputValue:1,checked:true},
//								str += result.rows[i].id;
								if(i == result.totalCount-1){
									str += "{boxLabel:'"+result.rows[i].provinceName+"',checked:"+result.rows[i].check+",inputValue:"+result.rows[i].id+"},"+
									"{fieldLabel: '',labelWidth :0,width:50,name: 'pro',id:'pro"+result.rows[i].id+"',xtype:'textfield',value:'"+result.rows[i].level+"'}";
								}else{
									str += "{boxLabel:'"+result.rows[i].provinceName+"',checked:"+result.rows[i].check+",inputValue:"+result.rows[i].id+"}, " +
											"{fieldLabel: '',labelWidth :0,width:50,name: 'pro',id:'pro"+result.rows[i].id+"',xtype:'textfield',value:'"+result.rows[i].level+"'},";
								}
								
							}
							str += ']';
							var itemsGroup = new Ext.form.CheckboxGroup({
								 id : 'openprovince',
								 fieldLabel : '开通省份',
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
					
					
       		 var win = Ext.getCmp('open_province_Win');
            	if(win == null){
            		var w = Ext.widget("open_province_Win"); 
            		w.show();
            	}else{
            		win.show();
            	}
       }