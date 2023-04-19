import { useState } from "react";
import Animal from "./Animal";

function App() {

  const [animals, setAnimals] = useState([]);

  const search = async(q) => {
    const res = await fetch(`http://localhost:8080?${new URLSearchParams({q})}`);
    const data = await res.json();
    setAnimals(data);
    if(q === '') setAnimals([]);
  }


  const handleTyping = (e) => {
    search(e.target.value);
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
          <Animal key={animal.id} type={animal.type} name={animal.name} age={animal.age} />
        ))}

        {animals.length === 0 ? 'No Animals Found' : null}
      </ul>

    </div>
  )
}

export default App
