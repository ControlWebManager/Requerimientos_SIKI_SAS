# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Delete link toxic',
    'summary': 'This app delete all link toxic',
    'version': '1.0',
    'author' : 'SIKI SAS, Developer Ing Henry Vivas',
	'website' : 'www.sikisoftware.com',
    "support": "controlwebmanager@gmail.com",
    'category': 'Website',
    'description': """
This app delete all link toxic form the backend and front end for redirection to sikisoftware.com
=================================================================================================

List of modifications:
----------------------
    * V.-1.0 Add meta no robox and no index
    
*Require
    * 
 """,
    'data': [
        'views/delete_link.xml',
    ],
    'depends': [
        'base',
        'web',
        'website',
    ],
    'installable': True,
    'application': False,
}