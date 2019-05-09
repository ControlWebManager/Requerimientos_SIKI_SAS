odoo.define('siki_buttons_addtocart_wishlist.shop_siki', function (require) {
'use strict';

var ajax = require('web.ajax');
var core = require('web.core');
var Widget = require('web.Widget');
var base = require('web_editor.base');
var editor = require('web_editor.editor');
var widget = require('web_editor.widget');
var website = require('website.website');
var Model = require('web.Model');
var model = new Model("ir.ui.view");


website.TopBarCustomize.include({

    do_customize: function (event) {
        var view_id = $(event.currentTarget).data('view-id');

        model.call("key_to_view_id", [], {view_id: view_id}).then( function(result){
            if(result == 'False'){
                alert('Debes desactivar antes la App: "Add to Wishlist From List"');
            }else{
                return ajax.jsonRpc('/web/dataset/call_kw', 'call', {
                    model: 'ir.ui.view',
                    method: 'toggle',
                    args: [],
                    kwargs: {
                        ids: [parseInt(view_id, 10)],
                        context: base.get_context()
                    }

                }).then( function() {

                    window.location.reload();
                });

            }
        });

    }
});


});
