/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('sdkinte.Application', {
    extend: 'Ext.app.Application',
    
    name: 'sdkinte',
 	controllers: [
        'Root'
        // TODO: add controllers here
    ],
    stores: [
        'sdkinte.store.app.AppStore',
        'sdkinte.store.sdk.SdkStore',
        'sdkinte.store.app.SingleappStore',
        'sdkinte.store.sdk.SinglesdkStore',
        'sdkinte.store.channel.ChannelStore',
        'sdkinte.store.operator.OperatorStore',
        'sdkinte.store.province.ProvinceStore',
        'sdkinte.store.operator.OperatorTotalStore',
        'sdkinte.store.province.ProvinceTotalStore',
        'sdkinte.store.channel.ChannelTotalStore',
        'sdkinte.store.channel.ShieldSdkStore',
        'sdkinte.store.appsdk.AppsdkStore',
        'sdkinte.store.requestlog.RequestlogStore',
        'sdkinte.store.app.ComboboxAppStore',
        'sdkinte.store.operator.ComboboxOperatorStore',
        'sdkinte.store.province.ComboboxProvinceStore',
        'sdkinte.store.sdk.ComboboxSdkStore'
    ],
    
    launch: function () {
       var username = Ext.util.Cookies.get('username');
    	if(null != username && username != ""){
    		Ext.application({
						    name: 'sdkintes',//这里的名字不能跟app.js里的名字一样
						    autoCreateViewport: 'sdkinte.view.main.Main'
						});
    	};			
    	//QuickTips读取标签中的ext:qtip属性，并为它赋予显示提示的动作
    	Ext.QuickTips.init();

    	
    	console.log('Application launch begin');
    }
});
