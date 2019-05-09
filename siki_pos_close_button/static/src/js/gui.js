odoo.define('siki_pos_close_button.gui', function (require) {
"use strict";


var gui = require('point_of_sale.gui');

    gui.Gui.include({

        show_screen: function(screen_name,params,refresh) {
            var screen = this.screen_instances[screen_name];

            var screen_active = screen_name;

            if(screen_active == 'receipt'){
                $('.pos .pos-rightheader .header-button:last').addClass('oe_hidden');
            }else{
                $('.pos .pos-rightheader .header-button:last').removeClass('oe_hidden');
            }

            if (!screen) {
                console.error("ERROR: show_screen("+screen_name+") : screen not found");
            }

            this.close_popup();

            var order = this.pos.get_order();
            if (order) {
                var old_screen_name = order.get_screen_data('screen');

                order.set_screen_data('screen',screen_name);

                if(params){
                    order.set_screen_data('params',params);
                }

                if( screen_name !== old_screen_name ){
                    order.set_screen_data('previous-screen',old_screen_name);
                }
            }

            if (refresh || screen !== this.current_screen) {
                if (this.current_screen) {
                    this.current_screen.close();
                    this.current_screen.hide();
                }
                this.current_screen = screen;
                this.current_screen.show(refresh);
            }
        }

    });

});
