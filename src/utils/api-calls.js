const axios = require('axios');

const getAstronautNames = () => {
  return axios.get('http://localhost:8888/astronauts/all/ordered', {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    }).then(names => names.data)
      .catch(error => console.log(error));

};
 module.exports = {
     getAstronautNames
 };


