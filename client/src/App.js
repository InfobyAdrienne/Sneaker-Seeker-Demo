import React , { Component, Fragment }  from 'react';
// import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';
import Home from './components/Home';
// import DataFetching from './components/DataFetching';

import './App.css';

export default function App() {
  return (
 
  <BrowserRouter>

  <body>
    <div>
    <nav>
      <div class="container-fluid">
        <a class="navbar-brand">Sneaker Seeker</a>
        <div>
          <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ul>
        </div>
      </div>

    </nav>
  </div> 
    {/* <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/search"  component={Search} />
    <Route path="/quiz"  component={Quiz} />
    </Routes> */}

    <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/results' element={<Results />}></Route>
    </Routes>

    <div class="page-container">
      <h1 class="tag-line">Find your perfect Sneaker</h1>
      <h3 id="tag">Use the search engine to generate matches</h3>
      </div>
      <div>
    <button class="btn" type="button">Search</button> 
    </div>
    <div>
    <button class="btn" type="button">Quiz</button> 
    </div>
  </body>
  </BrowserRouter>

  );
  // const Home = () => (
  //   <Fragment>
  //     <h1>Home</h1>
  //   </Fragment>
  //   );
  
  // const Search = () => (
  //   <Fragment>
  //     <h1>Search</h1>
  //   </Fragment>
  //   );
  
  // const Quiz = () => (
  //   <Fragment>
  //     <h1>Quiz</h1>
      
  //   </Fragment>
  //   ); 

}
/* </Routes> import React , {Component}  from 'react';
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

export default App; */

