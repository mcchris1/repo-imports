import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Country from './Country'

function App() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    return (
        <div className="App">
            <h1>Countries of the World</h1>
                <ul>
                    {countries.map((country, index) => {
                        return (
                            <Country 
                                name={country.name.common}
                                key={index}
                            />
                        )
                    })}
                </ul>
        </div>  );
}

export default App;
