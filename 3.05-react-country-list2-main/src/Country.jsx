import { useState } from 'react'

function Country(props) {

    const [country, setCountry] = useState()

    const handleClick = () => {
        fetch(`https://restcountries.com/v3.1/name/${props.name}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }

    return (
        <li onClick={handleClick}>
            {props.name}
            <p>
                {country && country[0].capital[0]}
            </p>
        </li>
    )
}

export default Country
