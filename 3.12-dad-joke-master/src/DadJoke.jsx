import './App.css'
import { useState, useEffect } from 'react'

function Giggidy() {
    const [joke, setJoke] = useState("");
    useEffect(() => {
        getJoke()
    }, [])
    const getJoke = () => {
        fetch("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
        .then(res => res.json())
        .then(data => setJoke(data))
    }
   
    return (
        <div className="App">
            <h1 className="App-header">Dad Jokes</h1>
            <div className="App-body">
                <p className="App-text">{joke.joke}</p>
                <button className="App-button" onClick={getJoke}>Giggidy</button>
            </div>
        </div>
    )
}

export default Giggidy;