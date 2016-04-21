
Ext.define('sdkinte.store.user.UserStore',{
	extend : 'Ext.data.Store',
	model : 'sdkinte.model.user.UserModel',
	alias : 'store.UserStore',
	pageSize : 20,
	//排序设置
	sorters :[{
		//排序字段
		property:'id',
		//排序方式  ASC 升序
		direction :'ASC'
	}],
	
	proxy : {
		type : 'ajax',
		url : '../user/getAllUser',
		reader : {
			type : 'json',
			rootProperty : 'users',
			totalProperty : 'totalCount'
		},
		writer :{
			type : 'json'
		}	 
	},
	 autoLoad: true 
	
});