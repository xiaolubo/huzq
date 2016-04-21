Ext.define('sdkinte.view.requestlog.region.RequestlogGridToolbar2', {  
            extend : 'Ext.toolbar.Toolbar',  
            alias : 'widget.rltoobleSea2',  
            controller: 'requestlog',
            id:'rltooble_Sea2',
            initComponent : function() {  
                this.items = [ {
                	
                	    xtype:'checkboxgroup',
						fieldLabel:'',
						id:'FileItype', 
						items:[
						{boxLabel:'APP',name:'cb_app',inputValue:1},//,checked: true
						{boxLabel:'SDK',name:'cb_sdk',inputValue:2},
						{boxLabel:'省份',name:'cb_province',inputValue:3},
						{boxLabel:'运营商',name:'cb_operator',inputValue:4},
						{boxLabel:'金额',name:'cb_price',inputValue:5}
						]
                
                },'|',{
                	xtype:'label',
                	html:"<font color='#FF0000'>默认显示前一天下行数</font>"
                },{
                	
                	    xtype:'radiogroup',
						fieldLabel:'',
//						itemId :'userfilty', 
						id:'userfilty', 
						items:[
						{boxLabel:'用户数',name:'fu',inputValue:1,hidden: true},//,checked: true
						{boxLabel:'下行数',name:'fu',inputValue:2,checked: true,hidden: true}
						]
                
                }];  
                this.callParent();  
            }  
        }) 
        
