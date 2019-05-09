# -*- coding: utf-8 -*-

{
    'name': 'Botones Compartir producto en Redes Social',
    'summary': 'Share contents in social networks',
    'depends': [
        'website',
        'website_sale',
    ],
    'author': 'SIKI SAS, Developer Ing Henry Vivas',
    'website': 'www.sikisoftware.com',
    "support": "controlwebmanager@gmail.com",
    'category': 'Website',
    'description': """
Share products on social networks 
=================================

Social Media
    * Facebook, 
    * Twitter, 
    * Pinterest 
    * Whatsapp
       
List of modifications:
----------------------
    * V.-1.0 Modify and improve functionality buttons compatir of products in stores( Req. 1063 )
    * V.-1.1 Se adapta funcionalidad de Whatsapp Shared Button
    * V.-2.0 Modificación de código para adaptar diseño con diferentes variantes en cuanto aplicaciones instaladas
            
    """,
    'data': [
        'views/website.xml',
        'views/website_sale.xml',
    ],
    'demo': [
    ],
    'test': [
    ],
    'qweb': [
    ],
    'js': [
    ],
    'css': [
    ],
    'installable': True,
}
