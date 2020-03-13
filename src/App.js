import React, {useState, useEffect} from 'react';
import './App.css';
import { getAstronautNames } from './utils/api-calls'
import { makeDashLine } from "./utils/utils";

const App = () =>{
    const [astronauts, setAstronauts]  = useState([]);
  useEffect(() => {
      getAstronautNames()
            .then( names => setAstronauts(names))
  },[]);
console.log(astronauts);
  return (
      <>
        <div className="divLining">
            <b>Names</b>
            <p>{makeDashLine(astronauts,"name")}</p>
            {astronauts.map( astronaut => {
                return(
                    <p p className="padding">{astronaut.name}</p>
                )})
            }
        </div>
          <div className="divLining vertical">
            <b>Craft</b>
            <p>{makeDashLine(astronauts,"craft")}</p>
              {astronauts.map( astronaut => {
                  return(
                      <span><p className="padding">{astronaut.craft}</p></span>
                  )})
              }
        </div>
          </>
  );
}

export default App;
