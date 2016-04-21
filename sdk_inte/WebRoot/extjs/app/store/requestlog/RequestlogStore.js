Ext.define('sdkinte.store.requestlog.RequestlogStore', {
	extend: 'Ext.data.Store',  
    model: 'sdkinte.model.requestlog.RequestlogModel',
    alias: 'store.requestlogStore',
    id:'requestlog_Store',
    fields : [ 'id','addtime','app','sdk','province','operator','usercont','requestcount','price'],  
            pageSize: 20,  //页容量5条数据
            //是否在服务端排序 （true的话，在客户端就不能排序）
            remoteSort: true,
            remoteFilter: false,
            proxy: {
                    type: 'ajax',
                    url: '../request/statisticsRequest',
                    reader: {   //这里的reader为数据存储组织的地方，下面的配置是为json格式的数据，例如：[{"total":50,"rows":[{"a":"3","b":"4"}]}]
                        type: 'json', //返回数据类型为json格式
                        rootProperty: 'rows' , //数据
                        totalProperty: 'totalCount' //数据总条数
                    }
                },
                sorters: [{
                    //排序字段。
                    property: 'id',
                    //排序类型，默认为 ASC 
                    direction: 'desc'
                }],
                autoLoad: true  //即时加载数据
    
});