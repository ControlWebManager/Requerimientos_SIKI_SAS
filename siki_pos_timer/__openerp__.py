# -*- coding: utf-8 -*-
# Copyright 2018 Tecnativa S.L. - David Vidal
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': 'SIKI POS Timer',
    'version': '09.0.1.0.0',
    'category': 'Point of Sale',
    'author': 'Ing Henry Vivas controlwebmanager@gmail.com,',
    'website': '',
    'license': 'AGPL-3',
    'sequence': 150,
    'description': """

List of modifications:
----------------------
    * V.-1.0 Adaptacion inicial
    * V.-1.2 Filtro para que el cronometro solo aparezca en productos determinados    
 """,
    'depends': [
        'point_of_sale',
    ],
    'data': [
        'templates/assets.xml',
        'views/view_app.xml',
    ],
    'qweb': [
        'static/src/xml/pos.xml'
    ],
    'application': False,
    'installable': True,
}
