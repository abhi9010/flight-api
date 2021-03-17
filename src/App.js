// import logo from './logo.svg';
// import './App.css';
// import img1 from './images/plane.png';
// import Card from '@material-ui/core/Card';
// // import FixedNavbarExample from '/home/mobillor/flyer/src/components/nav.js'



//     //  import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';



// function App() {
// 	const host = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/";
//   	const headers = {
//      	"x-rapidapi-key": "695e727725mshbcae4bc5e6f650ap11bc16jsnfda25e110cdb",
//       	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
// 	  }
	  
// 	  const NavBar = () => (
// 		<header className='navbar'>
// 			<div className='navbar__title navbar__item'>skyscanner</div>
// 			<div className='navbar__item'>About Us</div>
// 			<div className='navbar__item'>Contact</div>
// 			<div className='navbar__item'>Help</div>        
// 		</header>
// 	);

//   	const getPlaces = async (query) => {
//     	const response = await fetch(
// 			// endpoint
// 			`${host}autosuggest/v1.0/UK/GBP/en-GB/?query=${query}`, 
//     	// options
// 		{
//       		method: "GET",
//     		headers: headers
// 		});

//     	const result = await response.json()
//     	console.log(result);
// 		// setAutosuggest(result)
//   }

//   return (
//     <>
   
//       {/* <div className="col-md-10 offset-md-1 col-12 text-center"> */}
// 	  <NavBar />
//         <div class="container-fluid homepage-bgimage">
// 		<input onChange={e => getPlaces(e.target.value)} placeholder="Destination"/> 



//       </div>
//     </>
//   );
// }

// export default App;
    
// {/* export default App; */}


import React, { useState, useEffect } from "react";
import './App.css';
import FreeSol from '/home/mobillor/flyer/src/components/nav.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import SimpleCard from '/home/mobillor/flyer/src/components/card.js';
import { List, ListItem, ListItemText } from "@material-ui/core";

function App() {


  const NavBar = () => (
    		<header className='navbar'>
    			<div className='navbar__title navbar__item'>skyscanner</div>
    			<div className='navbar__item'>About Us</div>
    			<div className='navbar__item'>Contact</div>
    			<div className='navbar__item'>Help</div>        
    		</header>
    	);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState();
  const [result, setResult] = useState([]);
  const [source, setSource] = useState();
  const [result1, setResult1] = useState();
  const [destination, setDestination] = useState();
  const host =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/";
  const headers = {
    "x-rapidapi-key": "e020bd1963msh1673b37a5bea532p1e43d3jsn622ad43e58de",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
  };
  const fetchApiCall = async (query) => {
    const response = await fetch(
      `${host}browsequotes/v1.0/US/USD/en-US/${source}/${destination}/2021-03-15?inboundpartialdate=2019-12-01`,
      {
        method: "GET",
        headers: headers
      }
    );

    const data = await response.json();

    const { Carriers } = data;
    const { Quotes } = data;
    setResult(Quotes);
    setResult1(Carriers);
    setLoaded(true);
  };

  function sourceEntry(event) {
    setSource(event.target.value);
  }

  function destinationEntry(event) {
    // console.log(event.target.value)
    setDestination(event.target.value);
  }

  
  return (
    <>
    {/* <FreeSol /> */}
    <NavBar />
      <div class="container-fluid homepage-bgimage">
      <br></br>
        <br></br>
        <br></br>
        <div style={{ width: 300 }}>
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
       {/* <div style={{ width: 300 }}> */}
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      /></div>
        <label htmlFor="sourceroot">From</label>
        <input
          // onChange={(e) => getSourceSuggestion(e.target.value)} FUNCTION GETsOURCEsUGGESTION CALLING
          onChange={sourceEntry}
          value={source}
          placeholder="enter source name"
          type="text"
          name="sourceroot"
        />
        
       
       <SyncAltIcon />
        <label htmlFor="destinationroot">To</label>
        <input
          value={destination}
          onChange={destinationEntry}
          placeholder="enter destination name"
          type="text"
          name="destinationroot"
        ></input>

        <label htmlFor="departure">Departure Date</label>
        <input type="date" id="departure" name="departure" />

        <button onClick={fetchApiCall} type="button">
         Search
        </button>
        {!loaded ? (
          <h2>Application is loading...</h2>
        ) : (
          <List>
            {result.map((item) => (
              <ListItem>
                <ListItemText
                  primary={item.MinPrice}
                  secondary={result1
                    .filter((car) => {
                      return car.CarrierId === item.OutboundLeg.CarrierIds[0];
                    })
                    .map((carrier) => carrier.Name)}
                />
              </ListItem>
            ))}
          </List>
        )}
        <br></br>
        <br></br>
        <br></br>
        <SimpleCard/>
      </div>
      
    </>
  );
}
const top100Films = [
  { title: 'SFO-sky'},
  { title: 'JKF-sky'}]

export default App;

