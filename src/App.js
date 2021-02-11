import { OutlinedInput, InputLabel, Button } from '@material-ui/core';
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './css/App.css'; 
import Weather from './components/Weather';

const App =() => {
  const counter =  useSelector(state => state);
  
  const dispatch = useDispatch();

   const apidata = async (e) => {
    const data = await fetch (`http://localhost:3002/data?${counter.inputhandle.cityN}`).then(response=>response.json()); 
    dispatch({type:"Submit", payload:data});
   }  

  return (
    <div className="app" >

    <h1 className="p-3 text-center">Weather Forecast</h1>
    <hr></hr>
        
    <InputLabel className="InputLabel d-inline-block" ><strong>City Name : </strong></InputLabel>
     
      <OutlinedInput className="OutlinedInput d-inline-block" type='text' placeholder='Please enter city Name' onChange={(event)=> dispatch({type: "City",payload: event.target.value}) }/> 
      
      <InputLabel className="InputLabel d-inline-block" ><strong>Country Name : </strong></InputLabel>
      <OutlinedInput className="OutlinedInput d-inline-block" type='text' placeholder='Please enter country Name' onChange={(event)=> dispatch({type: "Country",payload: event.target.value}) }/>
      
    <Button className="d-inline-block m-5" type='button' variant="contained" color="default" onClick={ ()=> apidata() }>SUBMIT</Button>   <hr></hr><br></br>
     
    {

    ( (counter.weatherhandle.data!==undefined) ? 

    <Weather/> : null )

    }
    </div>
   
  );
}

export default App;
