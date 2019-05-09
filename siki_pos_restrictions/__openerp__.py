# -*- coding: utf-8 -*-
{
    'name': 'Restricción Botón Descuento/Precio ',
    'summary': 'Restrictions for PIN',
    'version': '1.0',
    'depends': ['pos_pin'],
    'author': 'SIKI SAS, Developer Ing Henry Vivas',
	'website' : 'www.sikisoftware.com',
    "support": "controlwebmanager@gmail.com",
    'category': 'Point Of Sale',
    'description': """
This module exted security for process  POS the sale
====================================================

List of modifications:
----------------------
    * V.-1.0 Privilegio de Supervisor para procesar descuentos o cambiar precios en Sesión del POS    
 """,
    'data': [
        'views/data.xml',
        'views/views.xml',
    ],
    'installable': True,
    'application': False,
}