import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createCat } from '../services/cats.js';

export default function CreateCat() {
  const [cat, setCat] = useState({
    name: "",
    age: "",
    species: "",
    image: ""
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    setCat((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createCat(cat)
    navigate("/cats", {replace: true})
  }

  return (
    <div>
      <h1>Create a Cute Cat</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your cat's name"
          name="name"
          value={cat.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your cat's age"
          name="age"
          value={cat.age}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your cat's species"
          name="species"
          value={cat.species}
          onChange={handleChange}
        />
        <input
          placeholder="Enter your cat's image"
          name="image"
          value={cat.image}
          onChange={handleChange}
        />
        <button type="submit">Make Your Cat</button>
      </form>
    </div>
  )
}
