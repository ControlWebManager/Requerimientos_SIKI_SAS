# -*- coding: utf-8 -*-
{
    'name': 'Bloqueo de Caja',
    'summary': 'Capacidad de bloquear Sessión POS',
    'version': '1.2',
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
    * V.-1.0 Bloqueo del POS 
    * V.-1.1 Boton de Bloqueo en Castellano "Bloqueo/Caja"
    
 """,
    'data': [
        'views/views.xml',
        'views/templates.xml',
    ],
    'qweb': [
        'static/src/xml/pos.xml',
    ],
    'installable': True,
    'application': False,
}