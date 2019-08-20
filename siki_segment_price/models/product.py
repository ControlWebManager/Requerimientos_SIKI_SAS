# -*- coding: utf-8 -*-
# developer Ing. Henry Vivas controlwebmanager@gmail.com


import re
import time

import openerp
from openerp import api, tools, SUPERUSER_ID
from openerp.osv import osv, fields, expression
from openerp.tools.translate import _
from openerp.tools import DEFAULT_SERVER_DATETIME_FORMAT, DEFAULT_SERVER_DATE_FORMAT
import psycopg2

import openerp.addons.decimal_precision as dp
from openerp.tools.float_utils import float_round, float_compare
from openerp.exceptions import UserError
from openerp.exceptions import except_orm


class product_product_inherited(osv.osv):
    _inherit = 'product.product'
    print 'hello man'

    def _product_price(self, cr, uid, ids, name, arg, context=None):
        super(product_product_inherited, self)._product_price(cr, uid, ids, name, arg, context=None)
        print 'metho heredado'
        plobj = self.pool.get('product.pricelist')
        res = {}
        if context is None:
            context = {}
        quantity = context.get('quantity') or 1.0
        pricelist = context.get('pricelist', False)
        partner = context.get('partner', False)

        if pricelist:

            # Support context pricelists specified as display_name or ID for compatibility
            if isinstance(pricelist, basestring):
                # print pricelist
                pricelist_ids = plobj.name_search(
                    cr, uid, pricelist, operator='=', context=context, limit=1)
                pricelist = pricelist_ids[0][0] if pricelist_ids else pricelist

            if isinstance(pricelist, (int, long)):
                products = self.browse(cr, uid, ids, context=context)

                # print products.price_extra
                qtys = map(lambda x: (x, quantity, partner), products)
                pl = plobj.browse(cr, uid, pricelist, context=context)

                price = plobj._price_get_multi(cr, uid, pl, qtys, context=context)
                print 'price->', price
                for id in ids:
                    product_variant = self.browse(cr, uid, id, context=context)
                    print product_variant._context
                    price[id] += product_variant.price_extra
                    print price
                    res[id] = price.get(id, 0.0)

        for id in ids:
            res.setdefault(id, 0.0)
        print res
        return res

    def _set_product_lst_price(self, cr, uid, id, name, value, args, context=None):
        product_uom_obj = self.pool.get('product.uom')

        product = self.browse(cr, uid, id, context=context)
        if 'uom' in context:
            uom = product.uom_id
            value = product_uom_obj._compute_price(cr, uid,
                                                   context['uom'], value, uom.id)
        print value
        value = value - product.price_extra

        return product.write({'list_price': value})


    _columns = {
        'price': fields.function(_product_price, fnct_inv=_set_product_lst_price,
                                 type='float', string='Price',
                                 digits_compute=dp.get_precision('Product Price')),
    }