/** 
 * 折叠式(accordion)菜单，样式可以自己用css进行美化 
 */  
  
Ext.define('sdkinte.view.main.region.AccordionMainMenu', {  
            extend : 'Ext.panel.Panel',  
            alias : 'widget.mainmenuaccordion',  
            requires: ['sdkinte.view.main.region.ButtonTransparent'],
            xtype:'navigate',
//            frame:true,
            title : '系统菜单',  
            collapsible : true,  
//            glyph : 0xf0c9,  
  
            layout : {  
                type : 'accordion',  
                animate : true  
            },  
  
            viewModel : 'main',  
  
            initComponent : function() {  
                this.items = [];  
                var menus = this.getViewModel().get('systemMenu');  
                for (var i in menus) {  
                    var menugroup = menus[i];  
                    var accpanel = {  
                        menuAccordion : true,  
                        xtype : 'panel',  
                        title : menugroup.text,  
                       /* bodyStyle : {  
                            padding : '10px'  
                        },  */
                        layout : 'fit',  
                        dockedItems : [{  
                                    dock : 'left',  
                                    xtype : 'toolbar',  
                                    items : []  
                                }],  
                        glyph : menugroup.glyph  
                    };  
                    for (var j in menugroup.items) {  
                        var menumodule = menugroup.items[j];  
                        accpanel.dockedItems[0].items.push({  
                                    xtype : 'buttontransparents',  
                                    text : this.addSpace(menumodule.text, 12),
                                    width:this.setWidth(),
                                    id:menumodule.itemId,
                                    glyph : menumodule.glyph,  
                                    handler : 'onMainMenuClick'  
                                });  
                    }  
                    this.items.push(accpanel);  
                }  
                this.callParent(arguments);  
            },  
            
            setWidth : function(){
			 	if (Ext.isIE) {
					  return '140px';
	   			 }else{
	   			 	 return '';
	   			 }
            },
  
            addSpace : function(text, len) {  
               
                var result = text;  
                for (var i = text.length; i < len; i++) {  
                    result += '　';  
                }  
                return result;  
            }  
  
        })  