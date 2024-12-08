# Frontend meli

## Descripción General

Este proyecto es una aplicación de comercio electrónico que permite a los usuarios buscar productos, ver resultados de búsqueda y añadir productos a un carrito de compras.

### Funcionalidades Principales:

- **Búsqueda de Productos**: En la vista de búsqueda, los usuarios pueden ingresar el nombre del producto que desean buscar. Al enviar el formulario, la aplicación navega a la vista de Resultados de Búsqueda, donde se muestran hasta 4 productos que coinciden con la búsqueda.
- **Detalles del Producto**: Los usuarios pueden hacer clic en uno de los productos en la vista de Resultados de Búsqueda para navegar a la vista de Detalle de Producto, donde se muestra más información sobre el producto seleccionado.
- **Carrito de Compras**: La funcionalidad del carrito permite a los usuarios añadir productos a su carrito y gestionar su contenido, facilitando una experiencia de compra completa.

## Arquitectura del Proyecto

Este proyecto sigue el principio de **Clean Architecture**, que promueve la separación de responsabilidades y la independencia de las capas. La estructura del proyecto se organiza de la siguiente manera:

src/
├── app # Contiene la capa de la interfaz de usuario, utilizando la metodologia de diseño atomico
├── application # Contiene los casos de uso y las reglas de negocio
├── infrastructure # Implementaciones de acceso a datos y servicios externos
├── interface # Interfaces de usuario y componentes
├── models # Modelos de datos y estructuras
├── routes # Definición de rutas y controladores
└── styles # Estilos SCSS y configuración de diseño

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

```bash
   git clone https://github.com/emilioQuilodran/front-ml.git
```

2.Navega al directorio del proyecto:

```bash
  cd tu_repositorio
  npm install
  npm run build
  npm run preview
```
