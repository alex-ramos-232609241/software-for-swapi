
##### Reseña
## proyecto desarrollado en serveless framework, desplegado en el servicio
## lamda de AWS.

#### Servicios utilizados
### El proyecto utiliza , el cliente http axios , para conectarse con la api SWAPI.
### Se hace uso de una libreria para traducir de EN a ES llamada @vitalets/google-translate-api.
### Se creo un servicio que traduce a español todas las key de objetos, se desfragmenta y se vuelve a ensamblar el objeto.

##### Rutas Habilitadas
#### /api/people/
#### /api/planets/
#### /api/films/
#### /api/species/
#### /api/vehicles/
#### /api/starships/

#### puesta es produccion en lamda AWS
######  GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/people
######  GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/planets
######  GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/films
######  GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/species
######  GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/vehicles
######  GET - https://o97uvqtgme.execute-api.us-east-1.amazonaws.com/dev/starships

