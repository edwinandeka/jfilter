JFilter
===================

Es un filtro genérico que se puede utilizar en cualquier pagina web.

> **dependencias:**

> -  [ JQuery  ](http://jquery.com/download/) 

----------


¿como se usa?
-------------

index.html

```
    <!DOCTYPE html>
<html>
<head>
  <title>JFilter ejemplo</title>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
  <script type="text/javascript" src="js/jquery.filter.js"></script>

</head>
<body>

<input type="text" id="buscar" />

<ul id="lista">
  <li>casa</li>
  <li>baile</li>
  <li>perro</li>
  <li>carril</li>
  <li>enano</li>
  <li>pepe</li>
  <li>zorro</li>
  <li>pala</li>
  <li>foca</li>
</ul>


<script type="text/javascript">
  
  $('#buscar').jFilter({
    container: '#lista',
    findBy: 'li',
    hide: 'li'
  });
</script>
</body>
</html>
```


Lo primero es incluir dentro de la etiqueta **< head >** del documento html la dependencia de JQuery y de la librería  [ jquery.jfilter.js](https://github.com/edwinandeka/jfilter),

```
<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
```
```
<script src="js/jquery.filter.js"></script>
```
descargamos y guardamos dentro de la carpeta js de tu projecto la libreria [ jquery.jfilter.js](https://github.com/edwinandeka/jfilter), luego insertamos, al final, antes de cerrar la la etiqueta **< head>** del documento html la referencia a nuestra libreria JFilter


Parámetros
------------------
```
$('#buscar').jFilter({
    container: '#lista',
    findBy: 'li',
    hide: 'li'
});
```
| Parámetro | type    |Descripción                  |
 -----------| --------|---------------------------- |
| container | `string`| `selector css del contenedor de la lista a filtrar`            |
| findBy    | `string`| `selector css del contenedor de la frase o palabra sobre la cual se filtrá`  |
| hide|   `string`| `selector css del contenedor que se va ocultar       |


----------
acerca del desarrollador:

![](https://g.twimg.com/twitter-bird-16x16.png)[ @edwin_eka2](https://twitter.com/edwin_eka2)
