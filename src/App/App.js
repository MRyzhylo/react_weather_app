import React, { useState, useEffect } from 'react';


import Info from '../Components/Info/Info';
import Cityweather from '../Components/Cityweather/Cityweather';
import './App.css';


function App() {
let [tempSymbol, setTempSymbol] = useState('C');
const [cities, setCities] =useState([]);

useEffect(() => {
  (async function fetchData () {
      const responce = await fetch('http://api.openweathermap.org/data/2.5/group?id=5368361,2643743,706483,2968815&units=imperial&appid=219d0dabcadb73f4f993ceb867091930');
      const data = await responce.json();

      console.log(data);
      
      setCities(data.list);
      
      
  })();
}, []);

  return (
    <div className="App">
      <Info tempSymbol={tempSymbol} setTempSymbol={()=> setTempSymbol(tempSymbol === 'C' ? 'F' : 'C' )} />
      <div className="cityBox">
      <Cityweather cities={cities[0]} tempSymbol={tempSymbol}/>
      <Cityweather cities={cities[1]} tempSymbol={tempSymbol}/>
      </div>
      <div className="cityBox">
      <Cityweather cities={cities[2]} tempSymbol={tempSymbol}/>
      <Cityweather cities={cities[3]} tempSymbol={tempSymbol}/>
      </div>
    </div>
  );
}

export default App;
