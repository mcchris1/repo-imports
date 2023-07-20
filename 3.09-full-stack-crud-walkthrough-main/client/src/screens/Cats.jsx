import Cat from '../components/Cat.jsx';
import { useState, useEffect } from 'react';
import { getCats } from '../services/cats.js';


export default function Cats() {
  const [cats, setCats] = useState([])

  const fetchCats = async () => {
    const allCats = await getCats()
    setCats(allCats)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <div>
      <h1>Cats</h1>
      {cats.map((cat) => (
        <Cat key={cat._id} cat={cat} />
      ))}
    </div>
  )
}
