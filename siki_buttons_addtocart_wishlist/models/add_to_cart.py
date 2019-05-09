# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

import openerp
import re
from openerp import models, api, fields


class ViewStatus(models.Model):

    _inherit = 'website'


    #value_field_active_view = fields.Boolean(compute='_compute_active_view', store=False)


    @api.model
    def compute_website_view(self):

        recordset = self.env['ir.ui.view']
        form_List = recordset.search([('key', '=', 'website_sale.products_list_view')])
        for record in form_List:
            if record.active == True:
                value = record.active
                # print('add_to_cart=',value)
                return value

    @api.model
    def compute_deshabilty_value(self):

        self.env.cr.execute("UPDATE ir_ui_view SET active= %s, customize_show= %s WHERE key= %s",
                            (True, True, 'add_to_cart.products_item_inherited',))

        self.env.cr.execute("UPDATE ir_ui_view SET active= %s, customize_show= %s WHERE key= %s",
                            (False, False, 'website_sale_wishlist.products_add_to_wishlist',))

        self.env.cr.execute("UPDATE ir_ui_view SET active= %s, customize_show= %s WHERE key= %s",
                           (False, False, 'website_sale_wishlist.product_add_to_wishlist',))

