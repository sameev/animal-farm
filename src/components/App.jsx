import Animal from "./Animal";
import { useAnimalSearch } from "../hooks/useAnimalSearch";

function App() {

  const { search, animals } = useAnimalSearch()

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
