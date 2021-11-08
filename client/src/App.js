import React , { Component, Fragment }  from 'react';
// import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// import Options from './components/Options';

export default function App() {
  return (
  
   <BrowserRouter>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
        </ul>
      </nav>
    <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/search"  component={Search} />
    <Route path="/quiz"  component={Quiz} />
    </Routes>

    <div>
      <h1>Find your perfect Sneaker</h1>
      <h3>Use the search engine to generate matches</h3>
    </div>
    <button type="button">Search</button> 
    <button type="button">Quiz</button> 

    </main>
</BrowserRouter>

  );
}



const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

const Search = () => (
  <Fragment>
    <h1>Search</h1>
  </Fragment>
  );

const Quiz = () => (
  <Fragment>
    <h1>Quiz</h1>
    
  </Fragment>
  );

{/* </Routes> import React , {Component}  from 'react';
 import './App.css';
 import Options from './components/Options';
 import DataFetching from './components/DataFetching';

 function App() {
   return (
      
     <div className="App">

       <header className="App-header">
        
       </header>

<div className= 'Options'>
         <Options />
       </div>

       <div className= 'Data'>
         <DataFetching />
       </div>

     </div>
   ) 

 }

export default App; */}
