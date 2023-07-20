import { useState, useEffect } from 'react';
import { getCat, deleteCat } from '../services/cats.js';
import { useParams, Link, useNavigate } from "react-router-dom";

export default function DetailCat() {
  const [cat, setCat] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchCat = async () => {
    const oneCat = await getCat(id)
    setCat(oneCat)
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <div>
      <h1>{cat.name}</h1>
      <img src={cat.image} alt={cat.name} />
      <p>{cat.age}</p>
      <p>{cat.species}</p>
      <div>
        <button>
          <Link to={`/cats/${cat._id}/edit`}>
          Edit Cat
          </Link>
        </button>
        <button onClick={() => {
          deleteCat(cat._id)
          navigate("/cats", {replace: true})
        }}>Delete Cat</button>
      </div>
    </div>
  )
}
