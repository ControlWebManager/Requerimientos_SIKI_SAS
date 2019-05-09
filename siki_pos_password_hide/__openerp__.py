# -*- coding: utf-8 -*-
{
    'name': 'Ocultar PIN POS',
    'summary': 'Hide Password setting user POS',
    'version': '1.0',
    'depends': [
        'base',
        'point_of_sale'
    ],
    'author' : 'SIKI SAS, Developer Ing Henry Vivas',
	'website' : 'www.sikisoftware.com',
    "support": "controlwebmanager@gmail.com",
    'category': 'Point Of Sale',
    'description': """
This module exted security the POS session
==========================================

List of modifications:
----------------------
    * V.-1.0 Ocultar clave (pin) dentro de la configuraciones de Usuario pestaña TPV
 """,
    'data': [
        'views/res_users_view.xml',
    ],
    'installable': True,
    'application': False,
}