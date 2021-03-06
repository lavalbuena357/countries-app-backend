# Countries App - Backend

Desarrollo de la parte del Backend para la aplicación "**Countries-App**" deployada en [Heroku](https://www.heroku.com/home).

## Tecnologías usadas
### `Node.Js` `Express.JS` `Sequelize` `PostgreSql`

## Instalación y scripts disponibles
- Forkear el respositorio y clonar en local
- Crear un base de datos local en Postgres
- En el repositorio local, crear dentro de la carpeta del proyecto el archivo `.env` con los datos requeridos por Sequelize para la conexión.
- Tener en cuenta los siguientes datos para conectar con `db.js` en la carpeta `src`: 
  - Puerto
  - Nombre de usuario de la base datos
  - Contraseña
  - Host
  - Nombre de la base de datos
  - Puerto
- En la carpeta raíz, en el archivo `index.js` tener en cuenta configurar `force: true` o `force: false` de acuerdo a la etapa de desarrollo o producción
- Los modelos ya están configurados por defecto, pero se puede echar un vistazo en la carpeta `models` y realizar los cambios que considere convenientes
- Las rutas y peticiones ya están configuradas en la carpeta `routes`, pero se puede echar un vistazo y realizar los cambios que considere convenientes para usted
- Ejecutar el comando `npm start` para iniciar la API y dirigirse en el navegador a `http://localhost:3000/api/v1/all` para correr en local

## Deploy
Obtener infromación sobre países desde la API RESTful deployada en [https://countriesinfoapp.herokuapp.com/api/v1/all](https://countriesinfoapp.herokuapp.com/api/v1/all) 

La API original de donde consumí todos los datos para crear mi propia API es: [restcountries.eu](https://restcountries.com/#api-endpoints-v3-all), puede echar un vistazo en su [documentación](https://restcountries.com/#api-endpoints-v3-all)

## Endpoints de la API hasta ahora 
#### (para usar en local y de acuerdo al puerto configurado):
Todos los paises con información básica: `http://localhost:3001/api/v1/all` \
Paginado: `http://localhost:3001/api/v1/all?page=pagina&limit=rango` \
Filtrado: `http://localhost:3001/api/v1/all?currency=moneda&lang=idioma&region=continente` \
Ver información detallada de un país: `http://localhost:3001/api/v1/detail/id-del-país`

### Frontend
Dejo en el siguiente enlace el [repositorio del Frontend](https://github.com/lavalbuena357/countries-app-frontend) de esta aplicación [**Countries App**](https://countriesinfo-app.web.app/), desarrollado bajo `React.Js` y usando `Redux` para el manejo de los estado y `css modules` para los estilos.
