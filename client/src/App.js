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

export default App;
