# React Client for Restify API

## Introducción

Este proyecto consiste en un Front desarrollado en React que consume la API del proyecto [Node Rest API Restify](https://github.com/sfranchi/node-rest-api-restify)

## Prerequisitos

Se necesita seguir las instrucciones de instalación y ejecución del proyecto API [Node Rest API Restify](https://github.com/sfranchi/node-rest-api-restify)

## Instalación

Luego de clonar el proyecto ejecutar en la consola

### `npm install`

## Configuración

En el archivo .env esta disponible la configuracion de las variables descritas en la tabla

Se recuerda que la existencia de este archivo .env es a fines puramente didácticos y en ningún caso de aplicación real debe versionarse dicho archivo, configurándose los secretos mediante métodos seguros.

|Variable|Descripción|
|---|---|
|API_VERSION|Version de la API|
|API_PROD_PORT|Puerto de la API en modo produccion|
|API_DEBUG_PORT|Puerto de la API en modo debug|
|TOKEN|Token de autenticación de la API|
|API_URL|Endpoint de la API|

## Ejecución

En el directorio del proyecto, se puede iniciar:

### `npm start`

Corre la app en el modo development<br>
Abre [http://localhost:3000](http://localhost:3000) para verlo en el browser

### `npm run build`

Construye la app para producción en la carpeta `build`. <br>

Ver la sección [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información





