import React, { useState,useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import './App.css';

function App() {

  const [data , setdata]= useState([]);
  const newdata=[];

   const fetchdata=async()=>{
    const request = await axios.get('http://localhost:3000/api')
    setdata(request.data.Thedata);
    return request;
  }

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        newdata.push(data[key])
      }
      }
      for (var value in newdata) {
          console.log(newdata[value].name)
        }

  useEffect(() => {

    fetchdata()
  })
  


  return (
    <div className="App">
      <SearchBar placeholder="Enter fish name..." data={newdata}/>
    </div>
  );
}

export default App;
