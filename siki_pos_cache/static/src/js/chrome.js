odoo.define('siki_pos_cache.chrome', function (require) {
"use strict";


    var PosBaseWidget = require('point_of_sale.BaseWidget');

    var PosCache = PosBaseWidget.extend({


            events: {
                "click div.js_pos_cache": "method1",
            },

            method1:function(){
                   console.log("VAmos bien");
            },
    });

});
