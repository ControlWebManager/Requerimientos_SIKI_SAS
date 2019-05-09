# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Botones Add to Cart and Wishlist',
    'summary': 'Hibrid Module - Reorganization of application buttons',
    'version': '4.0',
    'author' : 'SIKI SAS, Developer Ing Henry Vivas',
	'website' : 'www.sikisoftware.com',
    "support": "controlwebmanager@gmail.com",
    'category': 'Website',
    'description': """
This module extend App Add to Cart and Whislist.
================================================

List of modifications:
----------------------
    * V.-1.0 ( Req. 1061 ) Position icon Add to Cart Bottom - Right 
    * V.-1.1 ( Req. 1060 ) Position icon wishlist Top - Right
    * V.-1.2 Desing View list, button Published see
    * V.-1.3 Best structu Code Python in Model and Xml, More eficcient
    * V.-2.0 Implement the widget Javascript and call mthod python for select app in menu Customize Odoo
    * V.-3.0 ( Req. 1064 ) Position Icon Wishlist , Position input quantity
    * V.-4.0 Corrección de error: al desintalar app shop_siki se tenía que eliminar de forma manual registros creados en la base de datos,
    de otra forma se recibe error 500. Con esta actualizacion no es necesario elminar registros manuales, al desintalar shop_siki
    solo se debe actualizar la app website_sale_wishlist. 
     
    

*Required
   This module to work needs the installation of the Add to cart and website_sale_wishlist module

 """,
    'depends': [
        'website_sale',
        'add_to_cart',
        'website_sale_wishlist',
        'website',
        'sale',
        'payment',
    ],
    'data': [
        'data/data.xml',
        'views/add_to_cart_template_view.xml',
    ],
    'installable': True,
    'application': False,
}