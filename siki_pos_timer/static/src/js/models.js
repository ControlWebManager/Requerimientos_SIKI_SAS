/* Copyright 2019 GTICA.com,.ve - Ing. Henry Vivas
   License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl). */

odoo.define('siki_pos_timer.models', function(require) {
    "use strict";

    var rpc = require('web.rpc')
    var models = require("point_of_sale.models");
    var core = require('web.core');
    var _t = core._t;

    var formats = require('web.formats');
    var utils = require('web.utils');

    var round_di = utils.round_decimals;
    var round_pr = utils.round_precision;

    var SuperOrderline = models.Orderline.prototype;
    var SuperOrder = models.Order.prototype;

    models.load_fields('product.product', 'cronometro');

    models.Orderline = models.Orderline.extend({
        initialize: function(attr, options) {
            SuperOrderline.initialize.call(this, attr, options);
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
           // console.log('LIne 34 models.js Orderline',orderline.product )
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
        _set_quantity: function(quantity, keep_price) {
            var self = this;
            if (!this.checked_in)
                SuperOrderline.set_quantity.call(this, quantity, keep_price);
            else {
                self.pos.gui.show_popup('time_management_popup', {
                    'title': _t('Operación Prohibida!!!'),
                    'body': _t("No puede actualizar la cantidad de este producto ya que se está utilizando en este momento!!"),
                });
            }
        },

         set_quantity: function(quantity){

            var self = this;

            self.order.assert_editable();
           if (!this.checked_in){
                if(quantity === 'remove'){
                    self.order.remove_orderline(self);
                    return;
                }else{
                    var quant = parseFloat(quantity) || 0;
                    var unit = self.get_unit();
                    if(unit){
                        if (unit.rounding) {
                            self.quantity    = self.product.cronometro ? round_pr(quant, 0.001) : round_pr(quant, unit.rounding);
                            var decimals = self.product.cronometro ? 3 : self.pos.dp['Product Unit of Measure'];
                            self.quantityStr = formats.format_value(round_di(self.quantity, decimals), { type: 'float', digits: [69, decimals]});
                        } else {
                            self.quantity    = round_pr(quant, 1);
                            self.quantityStr = self.quantity.toFixed(0);
                        }
                    }else{
                        self.quantity    = quant;
                        self.quantityStr = '' + self.quantity;
                    }
                }
            }else {
                self.pos.gui.show_popup('time_management_popup', {
                    'title': _t('Operación Prohibida!!!'),
                    'body': _t("No puede actualizar la cantidad de este producto ya que se está utilizando en este momento!!"),
                });
            }
            self.trigger('change',self);

        },
    });
});;