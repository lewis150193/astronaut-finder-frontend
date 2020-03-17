import React, {useState, useEffect} from 'react';
import './App.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
const { getAstronautNames } = require('./utils/api-calls');
const  { makeDashLine } = require("./utils/utils");

const App = () =>{
    const [astronauts, setAstronauts]  = useState([]);
    const classes = useStyles();

    useEffect(() => {
      getAstronautNames()
            .then( names => setAstronauts(names))
  },[]);

  return (
      <>
          {/*<div className="divLining">*/}
          {/*  <b>Names</b>*/}
          {/*  <p>{makeDashLine(astronauts,"name")}</p>*/}
          {/*  {astronauts.map(astronaut => {*/}
          {/*      return(*/}
          {/*          <p  className="padding">{astronaut.name}</p>*/}
          {/*      )})*/}
          {/*  }*/}
          {/*</div>*/}
          {/*<div className="divLining">*/}
          {/*  <b>Craft</b>*/}
          {/*  <p>{makeDashLine(astronauts,"craft")}</p>*/}
          {/*    {astronauts.map((astronaut, index) => {*/}
          {/*        return(*/}
          {/*            <span><p className="padding">{astronaut.craft}</p></span>*/}
          {/*        )})*/}
          {/*    }*/}
          {/*</div>*/}
          <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="left">Craft</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {astronauts.map(row => (
                          <TableRow key={row.craft}>
                              <TableCell component="th" scope="row">
                                  {row.name}
                              </TableCell>
                              <TableCell align="left">{row.craft}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>

      </>
  );
};

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default App;
