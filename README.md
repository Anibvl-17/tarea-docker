# tarea-docker

Tarea del ramo Taller de Desarrollo, donde se utiliza Docker según arquitectura definida para la tesis.

## Arquitectura Definida

Inicialmente, se propone la siguiente arquitectura:

- **Backend**: Node.js 24, Express
- **Frontend**: React
- **Base de datos**: PostgreSQL 18

## Iniciar y acceder a la aplicación

Para iniciar la aplicación, asegúrate de encontrarte en la carpeta raíz del proyecto
(donde esta ubicado [docker-compose.yml](docker-compose.yml)) y utiliza el comando:

```bash
docker compose up
```

Para acceder a la aplicación y verificar que esté funcionando, dirígete a las siguientes 
direcciones:

- http://localhost:5173/ -> Aquí se ve la plantilla de frontend
- http://localhost:3000/ -> Aquí se ve el mensaje "¡API funcionando!"

## Variables de entorno

En el archivo [docker-compose.yml](docker-compose.yml) se incluyen variables de entorno 
por defecto. Para utilizar otras variables de entorno, utiliza el archivo [.env.example](.env.example) 
el cual sirve de plantilla para configurar las variables. Recuerda eliminar la parte _.example_!
