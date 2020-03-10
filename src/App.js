import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const [people, setPeople]  = useState([]);

const findLongestName = (array) => {
    let Namelength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > Namelength) {
            Namelength = array[i].length
        }
    }
    return Namelength
}

const Display = () => {
    for (let i = 0; i < findLongestName(people); i++) {

    }
    return (
    <div>

    </div>
)};

const App = () =>{
  useEffect(() => {
    axios.get('http://localhost:8090/astronauts', {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
        .then( results => results.data.people.map( astronaut => setPeople([...people, astronaut.name])))
  },[]);
  console.log(people)
  return (
    <div className="App">
    Yoo
        <p>{people}</p>

    </div>
  );
}

export default App;
