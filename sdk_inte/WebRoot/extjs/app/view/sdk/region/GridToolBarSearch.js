Ext.define('sdkinte.view.sdk.region.GridToolBarSearch', {  
            extend : 'Ext.toolbar.Toolbar',  
            alias : 'widget.sdkGBBarSea',  
            controller: 'sdk',
            id:'sdk_GBBarSea',
            initComponent : function() {  
                this.items = [ { 
				         fieldLabel:'名称',
				         labelWidth:30,
				         xtype: 'textfield', 
				         itemId:'sdkname'
				       }, {  
				         xtype: 'combobox',
				         labelWidth:60,
				         fieldLabel:'动营商',
				         itemId : 'operator',
				         valueField : 'id',
					     displayField : 'operatorName',
						 store : 'sdkinte.store.operator.OperatorTotalStore'
				       },{  
				         xtype: 'textfield',
				         labelWidth:60,
				         fieldLabel:'计费点',
				         itemId:'price'
				       },
				       	{  
				         text : '搜索',  
				         glyph : 0xf007,
				         handler:'searchSdk'
				       }     ];  
                this.callParent();  
            }  
        }) 
        
