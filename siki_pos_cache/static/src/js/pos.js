odoo.define('siki_pos_cache.pos', function (require) {
"use strict";

var chrome = require("point_of_sale.chrome");
var PosBaseWidget = require('point_of_sale.BaseWidget');
var Model = require('web.DataModel');

chrome.Chrome.include({
        build_widgets: function(){
            this.widgets.splice(1, 0, {
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
        });
    },
});

return {
        'RefreshPosCache': RefreshPosCache,
    };
});