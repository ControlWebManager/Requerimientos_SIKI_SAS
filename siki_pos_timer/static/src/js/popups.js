/* Copyright 2019 GTICA.com,.ve - Ing. Henry Vivas
   License LGPL-3.0 or later (https://www.gnu.org/licenses/lgpl). */

odoo.define('siki_pos_timer.popups', function(require) {
        "use strict";

        var gui=require('point_of_sale.gui');
        var popup_widget=require("point_of_sale.popups");

        var TimeManagementPopup=popup_widget.extend( {
                template:'TimeManagementPopup'
            }

        ); gui.define_popup( {
                name:'time_management_popup', widget:TimeManagementPopup
            }

        );
    }

);