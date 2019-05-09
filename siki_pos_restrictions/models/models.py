# -*- coding: utf-8 -*-
from openerp import models, fields, api


class PosConfig(models.Model):
    _inherit = 'pos.config'

    @api.model
    def _default_restrictions_pos_user(self):
        return self.env.ref('point_of_sale.group_pos_manager')

    restrictions_pos_group_id = fields.Many2one(
        'res.groups', string='Restrictions POS Group', default=_default_restrictions_pos_user,
        help='Grupo autorizado para Descuento y Cambio de precio en los Productos.')