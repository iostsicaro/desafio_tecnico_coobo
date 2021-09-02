# desafio_tecnico_coobo

## BANCO DE DADOS MONGODB

### A entidade  Document  possui os seguintes atributos:
- id
- kbSize  -> Tamanho em kilobytes
- name  -> Nome do documento (deve ser único)
- content  -> Conteúdo do documento
- createdAt  -> Data de criação do documento
- deletedAt  -> Data de exclusão do documento

## ENDPOINTS DA API

### GET /documents

Endpoint para retornar uma lista de todos os documentos cadastrados na API.

---

### GET /documents/:id

Endpoint para retornar os detalhes de um documento específico. 

---

### POST /documents

Endpoint para atender a funcionalidade de criar um novo documento para a API. Ele deverá receber os dados do documento através de objeto JSON no corpo da requisição.

#### Regras para essa rota:
- content  deve ser armazenado no banco de dados em formato base64
- kbSize  deve ser o tamanho dos dados de  content  em kilobytes

---

### DELETE /documents/:id

Endpoint para alterar os dados de um documento em específico. Nessa endpoint, não se recebe nenhum tipo de objeto JSON, porém, ela realiza a mudança lógica da tabela deletedAt, que antes, não possuia nenhum valor.

#### Regras para essa rota:
- A exclusão deve ser apenas lógica.

---

### GET /weekday-after?startDay={startDay}&amountOfDays={amountOfDays}

Endpoint que retorna o dia da semana, de acordo com a quantidade de dias que deverão ser percorridos a partir de um dia da semana informado.

---