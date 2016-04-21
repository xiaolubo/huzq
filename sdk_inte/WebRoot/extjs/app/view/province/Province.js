Ext.define('sdkinte.view.province.Province', {  
    extend : 'Ext.panel.Panel',  
  
    alias : 'widget.provincePanel',  
  
    requires : ['sdkinte.view.province.ProvinceController','sdkinte.view.province.ProvinceModel'],  
  
   uses : [ 'sdkinte.view.province.ProvinceGrid'],
  
    controller : 'province',  
    // MVVM架构的控制器的名称，main控制器会自动加载，这个控制器不会自动加载，需要在requires中指定，不知道是为什么  
    viewModel : {  
        type : 'province'  
    },  
    bind : {  
        // glyph : '{tf_glyph}', // 这一个绑定是无效的，在tabPanel渲染过后，再修改这个值，将不会有任何效果。  
        title : '{tf_title}' // 这个绑定是有效的，可以根据ModuleModel中的值来设置title  
    },  
    layout : 'border', // 模块采用border布局  
  
    initComponent : function() {  
        this.glyph = this.getViewModel().get('tf_glyph'); // 由于上面的glyph的bind无效，因此需要在这里加入glyph的设置  
        this.items = [{  
                    xtype : 'provincegrid', // 模块的grid显示区域  
                    region : 'center'  
  
                }
				]  
  
        this.callParent();  
    }  
  
})  