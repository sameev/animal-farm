import express from 'express';
import cors from 'cors';
const PORT = 8080;

//Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Make fake animal data;
import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(250).keys()].map( (id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  }
});

console.log(animals);

//HTTP endpoint to retreive animal data
app.get('', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const results = animals.filter( animal => {
    return animal.type.toLowerCase().includes(q) || animal.name.toLowerCase().includes(q);
  })

  res.send(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}.`)
})


