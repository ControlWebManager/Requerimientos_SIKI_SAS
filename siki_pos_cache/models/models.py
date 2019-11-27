# -*- coding: utf-8 -*-

from openerp import models, fields, api


class pos_cache(models.Model):
    _inherit = 'pos.config'

    @api.one
    def delete_cache_(self):
        # throw away the old caches
        print('INFO', self)
        self.cache_ids.unlink()
