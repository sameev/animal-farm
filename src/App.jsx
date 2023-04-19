import { useState } from "react"

function App() {

  const [animals, setAnimals] = useState([]);


  const handleTyping = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h1>Animal Farm</h1>
      <input 
        type="text"
        placeholder="Search"
        onChange={handleTyping}
      />

      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            <strong>{animal.type}</strong> {animal.name} {animal.age}
          </li>
        ))}

        {animals.length === 0 ? 'No Animals Found' : null}
      </ul>

    </div>
  )
}

export default App
