import { useState, useEffect } from "react";

export const useAnimalSearch = () => {
  const [animals, setAnimals] = useState([]);

  useEffect( () => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery);
  }, [])

  const search = async(q) => {
    const res = await fetch(`http://localhost:8080?${new URLSearchParams({q})}`);
    const data = await res.json();
    setAnimals(data);
    if(q === '') setAnimals([]);

    localStorage.setItem('lastQuery', q);
  }

  return { search, animals };
}