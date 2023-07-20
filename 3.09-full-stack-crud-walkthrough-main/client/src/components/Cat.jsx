import { Link } from "react-router-dom";

export default function Cat({cat}) {
 
  return (
    <div>
      <Link to={`/cats/${cat._id}`}>
        <img className="cat-image" src={cat.image} alt={cat.name} /> 
      </Link>
    </div>
  )
}
