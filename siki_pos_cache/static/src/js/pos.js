odoo.define('siki_pos_cache.pos', function (require) {
"use strict";

var chrome = require("point_of_sale.chrome");
var PosBaseWidget = require('point_of_sale.BaseWidget');
var Model = require('web.DataModel');

chrome.Chrome.include({
        build_widgets: function(){
            this.widgets.push({
                'name':   'refreshposcache',
                'widget': RefreshPosCache,
                'append':  '.pos-rightheader',
                });
            this._super();
        },
    });

var RefreshPosCache = PosBaseWidget.extend({
    template: 'RefreshPosCache',
    init: function(parent, options){
        options = options || {};
        this._super(parent,options);

    },
    renderElement: function(){
        var self = this;
        this._super();
        console.log('render element',this.pos)
         console.log('CONFIG',this.pos.config)
         console.log('pos db',this.pos.db)
         console.log('POS ID',this.pos.config.id)
        var args = [this.pos.config.id];
        this.$('.js_pos_cache').click(function(event){
            new Model('pos.config').call('delete_cache_',[args]).then(function(result){
                try{
                    location.reload();
                }catch(err){
                    console.error(err);

                }
            },function(err){
                console.error(err);

            });
            //self.deleteorder_click_handler(event,$(this));
        });
    },

});

var ShopnameWidget = PosBaseWidget.extend({
    template: 'ShopnameWidget',
    init: function(parent, options){
        options = options || {};
        this._super(parent,options);
    },
    renderElement: function(){
        var self = this;
        this._super();
    },
    get_shopname: function(){
        var branch = this.pos.pos_session.branch_id;
        if(branch){
            return branch[1];
        }else{
            return "";
        }
    },
});
return {
        'RefreshPosCache': RefreshPosCache,
    };
});