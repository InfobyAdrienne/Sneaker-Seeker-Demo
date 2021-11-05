import './App.css';
import React, { useState, useEffect } from 'react'
import Options from './Options'

function App() {
  let [data, setData] = useState( [] );
  
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  // At the moment the useEffect doesn't pull the data 
  
    // useEffect(() => {
    //   fetch("/api")
    //   .then(response => response.json())
    //       // 4. Setting *dogImage* to the image url that we received from the response above
    //   .then(data => setBrand(data))
    // },[])
  
  return (
      
    <div className="App">

      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>

      <div className= 'App'>
          <Options/>
      </div>
    </div>
  ) 

}

export default App;
