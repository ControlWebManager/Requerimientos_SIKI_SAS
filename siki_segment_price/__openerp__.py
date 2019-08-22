# -*- coding: utf-8 -*-
# Copyright 2016 LasLabs Inc.
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': 'Precio de producto por segmento',
    'summary': 'LIsta de precios',
    'version': '9.0.1.0.0',
    'category': 'Uncategorized',
    'author': 'Ing Henry Vivas',
    'license': 'AGPL-3',
    'application': False,
    'installable': True,
    'depends': [
        'product',
    ],
    'data': [
        'views/pos_pricelist.xml',
        'views/product_view.xml'
    ],
}
