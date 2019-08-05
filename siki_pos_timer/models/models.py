# -*- coding: utf-8 -*-
from openerp import models, fields, api


class SikiPosTimerProductTemplate(models.Model):
    _inherit = 'product.template'

    cronometro = fields.Boolean(string='Producto basado en Tiempo')

class SikiPosTimerProductProduct(models.Model):
    _inherit = 'product.product'

    cronometro = fields.Boolean(string='Cronómetro Producto', related="product_tmpl_id.cronometro")
