Ext.define('sdkinte.view.requestlog.region.RequestlogGridToolbar', {  
            extend : 'Ext.toolbar.Toolbar',  
            alias : 'widget.rltoobleSea',  
            controller: 'requestlog',
            id:'rltooble_Sea',
            initComponent : function() {  
                this.items = [ {  
				         xtype: 'datefield',
				         labelWidth:30,
				         fieldLabel:'日期',
				         itemId:'start_addtime',
				          value:Ext.util.Format.date(Ext.Date.add(new Date(),Ext.Date.DAY,-1),"Y-m-d") 
				       },{  
				         xtype: 'datefield',
				         labelWidth:10,
				         fieldLabel:'至',
				         itemId:'end_addtime',
				         value:Ext.util.Format.date(Ext.Date.add(new Date(),Ext.Date.DAY,-1),"Y-m-d") 
				       },{ 
				         
				         xtype: 'combobox', 
				         fieldLabel:'app',
				         labelWidth:20,
				         editable : false,
				         itemId:'app',
				          valueField : 'id',
					     displayField : 'name',
				         store:'sdkinte.store.app.ComboboxAppStore'
						
				       }, {  
				         xtype: 'combobox',
				         labelWidth:40,
				         fieldLabel:'动营商',
				         itemId : 'operator',
				         valueField : 'id',
					     displayField : 'operatorName',
						 store : 'sdkinte.store.operator.ComboboxOperatorStore'
				       }, {  
				         xtype: 'combobox',
				         labelWidth:30,
				         fieldLabel:'省份',
				         itemId : 'province',
				         valueField : 'id',
					     displayField : 'provinceName',
						 store : 'sdkinte.store.province.ComboboxProvinceStore'
				       }, {  
				         xtype: 'combobox',
				         labelWidth:20,
				         fieldLabel:'SDK',
				         itemId : 'sdk',
				         valueField : 'id',
					     displayField : 'sdkName',
						 store : 'sdkinte.store.sdk.ComboboxSdkStore'
				       },
				       	{  
				         text : '搜索',  
				         glyph : 0xf007,
				         handler:'searchRequestlog'
				       }];  
                this.callParent();  
            }  
        }) 
        
