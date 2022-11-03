import React, { useEffect, useState } from "react";
import './App.css';

const Joke = () => {
  function newJoke() {
    window.location.reload(false);
  }
    const [joke, setJoke] = useState("");
    useEffect(() => {
        const url = "https://api.chucknorris.io/jokes/random";
  
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.value);
                setJoke(json.value);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div class = "box">
            <h1>Chuck Norris Joke</h1>
            <p>{joke}</p>
            <button onClick={newJoke}>New Joke</button>
        </div>
    );
};



export default Joke;
