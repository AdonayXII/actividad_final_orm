Detalles de la base de datos:
La base de datos se llama "db_monsters_orm" por lo que si usted quiere usar otra base de datos tendra que cambiarlo en el backend.
La base de datos esta compuesta por 3 tablas, monsters, minerales y habitats. Un monstruo contiene su nombre y el tipo del mismo, ahora un habitat tiene su nombre, el monstruo en cuestión que habita en el, un monstruo puede pertenecer única y exclusivamente a un habitat pero en un habitat pueden haber más de un monstruo, el siguiente campo seria mineral, el cual sale de la tabla minerales y en este caso en un habitat solo puede existir un mineral y un mineral solo puede estar en un habitat. Para terminar ahora con la tabla "minerales", en esta tenemos los datos del nombre y el material que recogemos del mineral bruto.
Cabe recalcar que dentro de habitat la forma de añadir los valores relacionados de la otras tablas es mediante el campo "id" el cual debe estar en cada tabla.

Como usar el proyecto:
Primero clonamos el repositorio y nos dirigimos a ambas carpetas e instalamos los paquetes necesarios para cada una, por ejemplo para el backend seria "cd backend/" -> "npm install", y para el frontend lo mismo pero cambiando la ruta del "cd", "cd app" -> "npm install".
Ahora para iniciar el backend es desde el eclipse el cual necesitara la extensión de "Spring Boot 4 Tools" y lo iniciaremos con Spring. Y para iniciar el frontend(carpeta "app") tendremos que estar en la dirección de app(cd app) y iniciar el servidor de ionic, "ionic serve".
