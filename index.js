require('./global.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const User = require('./schema/User.js');
require('./connection.js');

const account = require('./routes/account')


app.post('/account/create-user', account.createUser);





const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


















let people = [
  {
    name: "Hannah Rickard",
    number: "06-51-99-56-83",
    id: 1
  },
  {
    name: "Hyun Namkoong",
    number: "10987654",
    id: 2
  },
  {
    name: "Courtney Martinez",
    number: "3691215",
    id: 3
  }
]
const getst = (request, response) => {
  response.send('<h1>Phonebook</h1>')
}
app.get('/', getst)


app.post('/api/people', (request, response) => {
  response.json(people);
  console.log(request.query);
})

