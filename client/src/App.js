import './App.css';
import Search from './components/Search';
import Results from './components/Results'
import Home from './components/Home'
// import DataFetching from './components/DataFetching';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

      <header className="App-header"></header>

      {/* <div className= 'Options'>
        <Options />
      </div>

      <div className= 'Data'>
        <DataFetching />
      </div>
        
      <div className= 'Results'>
        <Results />
      </div> */}

      </div>
    <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/results' element={<Results />}></Route>
    </Routes>
      
    </Router>
  )
}

export default App;
