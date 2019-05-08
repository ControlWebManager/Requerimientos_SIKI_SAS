# Requerimiento 1060 , 1061 , 1064

## Descripción: 

Reorganización de los botones de favoritos, agregar a carrito y otras, en la vista form y vista lista

## Nombre de la Aplicacion Final: 

siki_buttons_addtocart_wishlist

### Nota:
 
 Anteriormente esta aplicación se llamaba shop_siki (se puede eliminar)

### Lista de Modificaciones

------------------------
    * V.-1.0 ( Req. 1061 ) Position icon Add to Cart Button - Right 
    * V.-1.1 ( Req. 1060 ) Position icon wishlist Top - Right
    * V.-1.2 Desing View list, button Published see
    * V.-1.3 Best structu Code Python in Model and Xml, More eficcient
    * V.-2.0 Implement the widget Javascript and call mthod python for select app in menu Customize Odoo
    * V.-3.0 ( Req. 1064 ) Position Icon Wishlist , Position input quantity
    * V.-4.0 Corrección de error: al desintalar app shop_siki se tenía que eliminar de forma manual registros creados en la base de datos,
    de otra forma se recibe error 500. Con esta actualizacion no es necesario elminar registros manuales, al desintalar shop_siki
    solo se debe actualizar la app website_sale_wishlist. 

##Anexos

Anexo A  | Anexo B
------------- | -------------
![](https://pandao.github.io/editor.md/examples/images/4.jpg)  | ![](https://pandao.github.io/editor.md/examples/images/4.jpg)
     
     

---------------------
---------------------

# Requerimiento 1063

## Descripción: 

Mejoras para compartir productos en redes sociales

## Nombre de la Aplicacion Final: 

siki_website_sale_social_share

### Nota:
 
 Anteriormente esta aplicación se llamaba website_sale_social_share_siki (se puede eliminar)

### Lista de Modificaciones

    * V.-1.0 Modify and improve functionality buttons compatir of products in stores( Req. 1063 )
    * V.-1.1 Se adapta funcionalidad de Whatsapp Shared Button
    * V.-2.0 Modificación de código para adaptar diseño con diferentes variantes en cuanto aplicaciones instaladas

---------------------
---------------------
# Requerimiento 1068

## Descripción: 

Restricción para salir del punto de ventas

## Nombre de la Aplicacion Final: 

siki_pos_close_button

### Lista de Modificaciones

    * V.-1.0 Hide boton Close in Screen Receipt ( Req. 1068 )


---------------------
---------------------
# Requerimiento Especial POS

## Descripción: 

Entregas varias de aplicaciones

Nombre de la APP  | Objetivo
------------- | -------------
siki_pos_block  | Bloqueo de POS ; Botón en español "Bloqueo/Caja" ; Mejoras en codigo
siki_pos_password_hide  | Ocultar clave (pin) dentro de la configuraciones de Usuario pestaña TPV
siki_pos_restricciones  | Privilegio de usuario para procesar descuentos o cambiar precios en Sesión de POS    
     
## Mapa de aplicaciones:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)


---------------------
---------------------
# Requerimiento Especial para SIkisoftware.com

## Descripción: 

Esta aplicación elimina todos los enlaces tóxicos del backend y el front end que apuntan a sikisoftware.com, estos enlaces afectan al posicionamiento de la página web

## Nombre de la Aplicacion Final: 

siki_delete_link

### Lista de Modificaciones

    * V.-1.0 Add meta no robox and no index
    
