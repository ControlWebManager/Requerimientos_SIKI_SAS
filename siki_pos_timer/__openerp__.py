# -*- coding: utf-8 -*-
# Copyright 2018 Tecnativa S.L. - David Vidal
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': 'SIKI POS Timer',
    'version': '09.0.1.0.0',
    'category': 'Point of Sale',
    'author': 'Ing Henry Vivas controlwebmanager@gmail.com,',
    'website': '',
    'sequence': 150,
    'description': """

List of modifications:
----------------------
    * V.-1.0 Adaptacion inicial
    * V.-1.2 Filtro para que el cronometro solo aparezca en productos determinados
    * V.-1.3 Mostrar Tiempo en la linea del producto del Ticket POS
    * V.-2.0 Instalación automática de Unidades de Medidas, Hora, Minutos
    * V.-2.1 Adaptacion de tres decimales para los productos con tiempo
    * V.-3.0 Aplicacion funcionando con administración de mesas     
 """,
    'depends': [
        'product',
        'point_of_sale',
    ],
    'data': [
        'data/siki_pos_timer_data.xml',
        'templates/assets.xml',
        'view_app.xml',
    ],
    'qweb': [
        'static/src/xml/pos.xml'
    ],
    'application': False,
    'installable': True,
}
