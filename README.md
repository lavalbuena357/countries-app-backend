# Countries App - Backend

Desarrollo de la parte del Backend para la aplicación "Countries-App".

## Tecnologías usadas
### `Node.Js` `Express.JS` `Sequelize` `PostgresSql`

## Instalación y scripts disponibles
- Forkear el respositorio y clonar en local
- Crear un base de datos manualmente en Postgres
- En el repositorio local, crear dentro de la carpeta `src` un archivo llamado `env.js` o bien cambiar la configuración y crear un archivo `.env` con los datos requeridos por Sequelize para la conexión.
- Tener en cuenta los siguientes datos para conectar con `db.js` en la carpeta `src`: 
  - Nombre de usuario de la base datos
  - Contraseña
  - Host
  - Nombre de la base de datos
  - Puerto
- En la carpeta raíz, en el archivo `index.js` tener en cuenta configurar `force: true` o `force: false` de acuerdo a la etapa de desarrollo o producción
- Los modelos ya están configurados por defecto, pero se puede echar un vistazo en la carpeta `models` y realizar los cambios que considere convenientes
- Las rutas y peticiones ya están configuradas en la carpeta `routes`, pero se puede echar un vistazo y realizar los cambios que considere convenientes para usted
- Ejecutar el comando `npm start` para iniciar la API y dirigirse en el navegador a `http://localhost:3000/countries` para correr en local

## Deploy
Obtener infromación sobre países desde la API RESTful deployada en [https://countriesinfoapp.herokuapp.com/countries/](https://countriesinfoapp.herokuapp.com/countries/) 

La API original de donde consumí todos los datos para crear mi propia API es: [restcountries.eu](https://restcountries.eu/rest/v2/), puede echar un vistazo en su [documentación](https://restcountries.eu/)

## Endpoints de la API hasta ahora (para usar en local y de acuerdo al puerto configurado):
Todos los paises con información básica: `http://localhost:3000/countries` \
Buscar un país por el nombre: `http://localhost:3000/countries?name=nombre-del-país` \
Filtrar por continente: `http://localhost:3000/countries?continent=nombre-del-continente` \
Ver información detallada de un país: `http://localhost:3000/countries/id-del-país`

*Nota: También tiene algunos ordenamientos que se pueden usar para la aplicación tales como ordén alfabético de países o por población ascendente y desencente*
