/* Copyright 2019 GTICA.com,.ve - Ing. Henry Vivas
   License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl). */

odoo.define('siki_pos_timer.models', function(require) {
    "use strict";

    var rpc = require('web.rpc')
    var models = require("point_of_sale.models");
    var core = require('web.core');
    var _t = core._t;
    var SuperOrderline = models.Orderline.prototype;

    models.load_fields('product.product', 'cronometro');

    models.Orderline = models.Orderline.extend({
        initialize: function(attr, options) {
            SuperOrderline.initialize.call(this, attr, options);
            //console.log('line 15 models.js options',attr,options)
            this.checked_in = false;
            this.checked_out = false;
            this.usage_time = "00:00:00";
            this.start = null;
            this.stop = null;
            if (options.json) {
                this.checked_in = options.json.checked_in;
                this.checked_out = options.json.checked_out;
                this.usage_time = options.json.usage_time;
                this.start = options.json.start;
                this.stop = options.json.stop;
            }
        },
        can_be_merged_with: function(orderline) {
            var self = this;
            console.log('LIne 34 models.js Orderline',orderline.product )
            if (orderline.product.cronometro)
                return false;
            return SuperOrderline.can_be_merged_with.call(this, orderline);
        },
        export_as_JSON: function() {
            var dict = SuperOrderline.export_as_JSON.call(this);
            dict.checked_in = this.checked_in;
            dict.checked_out = this.checked_out;
            dict.usage_time = this.usage_time;
            dict.start = this.start;
            dict.stop = this.stop;
            //console.log('line 44 models.js dict',dict)
            return dict;
        },
        set_quantity: function(quantity, keep_price) {
            var self = this;
            if (!this.checked_in)
                SuperOrderline.set_quantity.call(this, quantity, keep_price);
            else {
                self.pos.gui.show_popup('time_management_popup', {
                    'title': _t('Operation Prohibited!!!'),
                    'body': _t("You cannot update the quantity of this product as it is being utilized at the moment!!"),
                });
            }
        },
        _set_quantity: function(quantity){
        this.order.assert_editable();
        if(quantity === 'remove'){
            this.order.remove_orderline(this);
            return;
        }else{
            var quant = parseFloat(quantity) || 0;
            var unit = this.get_unit();
            if(unit){
                if (unit.rounding) {
                    this.quantity    = round_pr(quant, unit.rounding);
                    var decimals = this.pos.dp['Product Unit of Measure'];
                    this.quantityStr = formats.format_value(round_di(this.quantity, decimals), { type: 'float', digits: [69, decimals]});
                } else {
                    this.quantity    = round_pr(quant, 1);
                    this.quantityStr = this.quantity.toFixed(0);
                }
            }else{
                this.quantity    = quant;
                this.quantityStr = '' + this.quantity;
            }
        }
        this.trigger('change',this);
    },
    });
});;