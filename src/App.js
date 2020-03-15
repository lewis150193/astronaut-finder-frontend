import React, {useState, useEffect} from 'react';
import './App.css';
const { getAstronautNames } = require('./utils/api-calls');
const  { makeDashLine } = require("./utils/utils");

const App = () =>{
    const [astronauts, setAstronauts]  = useState([]);
  useEffect(() => {
      getAstronautNames()
            .then( names => setAstronauts(names))
  },[]);
  return (
      <>
          <div className="divLining">
            <b>Names</b>
            <p>{makeDashLine(astronauts,"name")}</p>
            {astronauts.map(astronaut => {
                return(
                    <p  className="padding">{astronaut.name}</p>
                )})
            }
          </div>
          <div className="divLining">
            <b>Craft</b>
            <p>{makeDashLine(astronauts,"craft")}</p>
              {astronauts.map((astronaut, index) => {
                  return(
                      <span><p className="padding">{astronaut.craft}</p></span>
                  )})
              }
          </div>
      </>
  );
};

export default App;
