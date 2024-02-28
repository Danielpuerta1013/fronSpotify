//consumiendo APIS
/* 
1. Declarar una variable para almacenar la URL del API
2. Almacenar en una variable o en varias variables datos de control que se necesiten en el API
3. Construir la peticion que se va a enviar 
4. Ejecutar el consumo del API
*/

let url="https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD/top-tracks?market=US"
let token="Bearer BQB7PpsPzIjazUA1aZv1iFNk9NulQ6VNbAFgeLogUVb5c_Vuu3bAZhxpFk55vrraNdqCbT9vLa7LRV68ujA2lMRthwRv5rUiAXL5ZodTIdwkUWqR2Ag"
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    },

}
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})