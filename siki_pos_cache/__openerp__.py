{
    'name': 'Siki POS Cache',
    'summary': '***',
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
    * V.-1.0 
        """,
    'depends': [
        'point_of_sale',
        'pos_cache',
    ],
    'data': [
        'views/templates.xml',
    ],
    'qweb': [
        'static/src/xml/pos.xml'
    ],
    'installable': True,
    'application': False,
}