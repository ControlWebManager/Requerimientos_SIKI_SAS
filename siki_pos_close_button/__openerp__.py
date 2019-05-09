{
    'name': 'Ocultar botón Cerrar en POS',
    'summary': 'Button Close Point of Sale',
    'author': 'SIKI SAS, Developer Ing Henry Vivas',
	'website' : 'www.sikisoftware.com',
    "support": "controlwebmanager@gmail.com",
    'category': 'Point Of Sale',
    'version': '1.0',
    'sequence': 6,
    'description': """
Procces for sal, hide button in Point of Sale
=============================================

List of modifications:
----------------------
    * V.-1.0 Hide boton Close in Screen Receipt ( Req. 1068 )
        """,
    'depends': [
        'point_of_sale',
    ],
    'data': [
        'views/templates.xml',
    ],
    'installable': True,
    'application': False,
}