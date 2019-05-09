# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import openerp
import re
from openerp.osv import osv, fields


class shopSiki(osv.osv):
    _inherit = 'ir.ui.view'

    def key_to_view_id(self, cr, uid, view_id, context=None):
        View = self.pool.get('ir.ui.view')
        print view_id
        cr.execute('''
                 SELECT id, active FROM ir_ui_view
                     WHERE key= %s''', ('add_to_cart.products_item_inherited',))
        add_to_cart = cr.fetchall()

        cr.execute('''
                 SELECT id, active FROM ir_ui_view
                      WHERE key= %s''', ('siki_buttons_addtocart_wishlist.products_add_to_wishlist_extend_list',))
        wish_list = cr.fetchall()

        """ IF not exist add to cart"""
        views = add_to_cart[0][0], add_to_cart[0][1], wish_list[0][0], wish_list[0][1]
        if (view_id == add_to_cart[0][0]) or view_id == wish_list[0][0]:
            """If add to cart is false and wish active wish_list"""
            if (view_id == add_to_cart[0][0]) and (add_to_cart[0][1] == True) and (wish_list[0][1] == True):
                # print views
                return "False"
            if (view_id == wish_list[0][0]) and (add_to_cart[0][1] != True) and (wish_list[0][1] != True):
                cr.execute("UPDATE ir_ui_view SET active= %s WHERE key= %s",
                           (True, 'add_to_cart.products_item_inherited',))
                #print views
                return True
            #print views
            return True
        else:
            print views
            return True

