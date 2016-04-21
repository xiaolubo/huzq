/** 
 * 模块的控制器 
 */  
  
Ext.define('sdkinte.view.requestlog.RequestlogController', {  
            extend : 'Ext.app.ViewController',  
  
            alias : 'controller.requestlog',
            requires: [
//            'sdkinte.view.requestlog.region.AddAppprice',
//            'sdkinte.view.requestlog.region.EditAppprice'
            ],
            
          
            searchRequestlog : function(){
            	    var toolbar = Ext.getCmp('rltooble_Sea');
            	     var toolbar2 = Ext.getCmp('rltooble_Sea2');
    				var start_addtime =  toolbar.getComponent('start_addtime').getValue();
    				var end_addtime =  toolbar.getComponent('end_addtime').getValue();
    				var app =  toolbar.getComponent('app').getValue();
    				var operator =  toolbar.getComponent('operator').getValue();
    				var province =  toolbar.getComponent('province').getValue();
    				var sdk =  toolbar.getComponent('sdk').getValue();
//    				var userfilty =  toolbar2.getComponent('userfilty').getValue().inputValue;
    				var userfilty =  Ext.getCmp('userfilty').lastValue.fu;
    				var filtyValue = Ext.getCmp('FileItype').getChecked();
                     var val = '';
//    				alert('app'+app+'operator'+operator+'province:'+province+'sdk:'+sdk);
                     Ext.Array.each(filtyValue, function(item){
                        val +=  item.inputValue+',';
                     });
//    			alert(val);
//    				var isFree =  toolbar.getComponent('isFree').getValue();
             	  //store 加载之前将参数放进去以待后台获取
			    	var grid = Ext.getCmp('requestlog_grid');
			    	if(val != ""){
					    	if(val.indexOf("1") == -1){
					    		grid.down('#appColumn').hide();
					    	}else{
					    		grid.down('#appColumn').show();
					    	}
					    	if(val.indexOf("2") == -1){
					    		grid.down('#sdkColumn').hide();
					    	}else{
					    		grid.down('#sdkColumn').show();
					    	}
					    	if(val.indexOf("3") == -1){
					    		grid.down('#provinceColumn').hide();
					    	}else{
					    		grid.down('#provinceColumn').show();
					    	}
					    	if(val.indexOf("4") == -1){
					    		grid.down('#operatorColumn').hide();
					    	}else{
					    		grid.down('#operatorColumn').show();
					    	}
					    	if(val.indexOf("5") == -1){
					    		grid.down('#priceColumn').hide();
					    	}else{
					    		grid.down('#priceColumn').show();
					    	}
			    	}
			    	else{
			    		grid.down('#appColumn').hide();
			    		grid.down('#sdkColumn').hide();
			    		grid.down('#provinceColumn').hide();
			    		grid.down('#operatorColumn').hide();
			    		grid.down('#priceColumn').hide();
			    	}
			    	if(app != null && app != 0){
			    		grid.down('#appColumn').show();
			    	}
			    	if(operator != null && operator != 0){
			    		grid.down('#operatorColumn').show();
			    	}
			    	if(province != null && province != 0){
			    		grid.down('#provinceColumn').show();
			    	}
			    	if(sdk != null && sdk != 0){
			    		grid.down('#sdkColumn').show();
			    	}
			    	if(userfilty == 1){
//			    		alert(userfilty);
//			    		grid.down('#requestcountColumn').hide();
//			    		grid.down('#usercontColumn').show();
			    	}else{
//			    		alert(userfilty);
//			    		grid.down('#usercontColumn').hide();
//			    		grid.down('#requestcountColumn').show();
			    	}
			    	var store = grid.getStore();
			    	store.on('beforeload', function (store, options) {
				        Ext.apply(store.proxy.extraParams, {"start_addtime":start_addtime,"end_addtime":end_addtime,"app":app,"operator":operator,"province":province,"sdk":sdk,"filter":val,"userfilty":userfilty});
			        });
			    	store.load();  
            }
            
            
        })  