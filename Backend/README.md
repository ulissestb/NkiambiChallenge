# NkiambiChallenge Backend

### Mostrar todos os planetas

`Axios.get('/planets')`     

Retornara um JSON com a lista de planetas no banco de dados.

### Buscar planetas da SWAPI

`Axios.get('/planets/:id')`      

Retornara um JSON com um planeta e adicionar automaticamente ao banco de dados.

### Buscar planetas por ID

`Axios.post('/planets/busca', { "_id": "idDoPlaneta"} )`    

Retorna um JSON com apenas o planeta buscado

### Buscar planetas por NOME

`Axios.post('/planets/name', { "name": "Terra"} )`      

OBS: Só retornara o planeta caso o nome esteja CORRETO

### Adiciona Planeta manualmente

`Axios.post('/planets/add', { name: "Terra", climate: "hot", terrain: "Urban", films: 2 })`     

Adiciona o planeta manualmente ao banco de dados

### Remove planeta por ID

`Axios.post('/planets/remove', {_id: "idDoPlaneta"} )`     

Exclui direto do banco
