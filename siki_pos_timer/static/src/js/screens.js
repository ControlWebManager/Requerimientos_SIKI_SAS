/* Copyright 2019 GTICA.com,.ve - Ing. Henry Vivas
   License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl). */

odoo.define('siki_pos_timer.screens', function(require) {
    "use strict";
    var screens = require("point_of_sale.screens");
    var core = require('web.core');
    var _t = core._t;
    screens.ActionpadWidget.include({
        renderElement: function() {
            var self = this;
            this._super();
            this.$('.pay').off("click");
            this.$('.pay').click(function() {
                            //console.log('Line 15 screens.js', !self.pos.chrome.screens.products.order_widget.check_in_process())

                if (self.pos.chrome.screens.products.order_widget.check_in_process()) {

                   // console.info('Line 34si existo por aca pero no ejecuto popup', )
                    self.gui.show_popup('time_management_popup', {
                        'title': _t('Product Is Being Used!!!'),
                        'body': _t("Please stop the utilization process in the orderlines to proceed!!"),
                    });
                }else {
                        self.gui.show_screen('payment');
                    }
            });
        },
    });
    screens.OrderWidget.include({
        update_summary: function() {
            this._super();
            if (this.check_in_process()) {
                this.el.querySelector('.summary .total > .value').textContent = "___";
                this.el.querySelector('.summary .total .subentry .value').textContent = "___";
            }
        },
        check_in_process: function() {
            var order = this.pos.get_order();
            var lines = order.get_orderlines();
            var ongoing = false;
            _.each(lines, line => {
                if (line.checked_in) {
                    ongoing = true;
                    return true;
                }
            });

            //console.info('Line 49 screens', ongoing )
            return ongoing;
        },
        click_checkin: function(orderline) {
            var self = this;
            orderline.checked_in = true;
            orderline.checked_out = false;
            this.rerender_orderline(orderline);
            this.update_summary();
            if (!orderline.start)
                orderline.start = new Date;
            else if (orderline.stop) {
                orderline.start = new Date(new Date - (new Date(orderline.stop) - new Date(orderline.start)));
                orderline.stop = null;
            } else
                orderline.start = new Date(orderline.start);
            orderline.timer_interval = setInterval(function() {
                self.update_timer(orderline)
            }, 1000);
        },
        update_timer: function(orderline) {
            var total_seconds = (new Date - orderline.start) / 1000;
            var hours = Math.floor(total_seconds / 3600);
            total_seconds = total_seconds % 3600;
            var minutes = Math.floor(total_seconds / 60);
            total_seconds = total_seconds % 60;
            var seconds = Math.floor(total_seconds);


            hours = (hours < 10 ? "0" : "") + hours;
            minutes = (minutes < 10 ? "0" : "") + minutes;
            seconds = (seconds < 10 ? "0" : "") + seconds;

            var currentTimeString = hours + ":" + minutes + ":" + seconds;
            orderline.usage_time = currentTimeString;
            var node = orderline.node;
            $(node).find(".wk-timer").text(currentTimeString);
            //this.pos.get_order().save_to_db();
        },
        click_checkout: function(orderline) {
            clearInterval(orderline.timer_interval);
            orderline.checked_out = true;
            orderline.checked_in = false;
            orderline.stop = new Date;

            //Guarda la informacion en la BD temporal de la Aplicacion
            this.pos.get_order().save_to_db();

            //Tiempo en funcionamiento del cronometro, tipo de variable String
            var duration = orderline.usage_time;

            /*** Separa Hora , Minutos, Segundos, tipo de variable de escape Int */
            /**/let hours = parseInt(duration.split(":")[0]);

            /**///Anteponiendo un 0 a los minutos si son menos de 10
            let minutes = parseInt(duration.split(":")[1]);
            /**/let seconds = parseInt(duration.split(":")[2]);

            //factor_inv variable  de odoo que indica el valor de proporcion o relacion de la unidad de medidad
            var factor_inv = this.pos.units_by_id[orderline.product.uom_id[0]].factor_inv;
           // console.log('LIne 109 screens.js', factor_inv)
            //Aca se transforma el forma hora (1:20:00 == 90 mint) para poder
            var total = (hours * 60 + minutes) ;


            //Si la unidad de medida es de un minuto
            if(factor_inv < 1){

              orderline.set_quantity(total);

            }else{
                //Por paca se ejecuta cuando la uniodad de medida es Hora o unidades standar
                orderline.set_quantity(total/60);
            }
            this.pos.get_order().save_to_db();

            this.rerender_orderline(orderline);
            this.update_summary();
        },
        _original_click_checkout: function(orderline) {
            clearInterval(orderline.timer_interval);
            orderline.checked_out = true;
            orderline.checked_in = false;
            orderline.stop = new Date;

            //Guarda la informacion en la BD temporal de la Aplicacion
            this.pos.get_order().save_to_db();

            //Tiempo en funcionamiento del cronometro, tipo de variable String
            var duration = orderline.usage_time;

            /*** Separa Hora , Minutos, Segundos, tipo de variable de escape Int */
            /**/let hours = parseInt(duration.split(":")[0]);
            /**/let minutes = parseInt(duration.split(":")[1]);
            /**/let seconds = parseInt(duration.split(":")[2]);
            /*** ***/

            /*Condicional para sumar la hora si el cronometro no ha sido activado */
            if (minutes == 0 && seconds == 0) {
                orderline.set_quantity(hours);

            /*Condicional suma la hora */
            } else {
                orderline.set_quantity(hours + 1);
            }
            this.rerender_orderline(orderline);
            this.update_summary();
        },
        click_line: function(orderline, event) {
            var self = this;

            console.log('Line 161 screens.js Version SIKI POS TIMER 3.0 26/07/2019')
            self._super(orderline, event)
            if ($(event.target).hasClass('fa-play'))
                this.click_checkin(orderline);
            else if ($(event.target).hasClass('fa-stop'))
                this.click_checkout(orderline);
        },


    });
});;
