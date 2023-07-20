import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { updateCat, getCat } from '../services/cats';

export default function EditCat() {
  const [cat, setCat] = useState({
    name: "",
    age: "",
    species: "",
    image: ""
  })

  let navigate = useNavigate()
  let { id } = useParams()

  const fetchCat = async () => {
    const oneCat = await getCat(id)
    setCat(oneCat)
  }

  useEffect(() => {
    fetchCat()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setCat((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateCat(id, cat)
    navigate(`/cats/${id}`, {replace: true})
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
