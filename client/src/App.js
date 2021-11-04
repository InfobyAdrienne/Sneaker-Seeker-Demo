import './App.css';
import React, { useState } from 'react'

function App() {
    const[state, setState] = useState("")
  
  
  
  return (
    <div className="container p-5">
        <select className="custom-select">
                <option value="Nike">Nike</option>
        <option value="Jordan">Jordan</option>
        <option value="Converse">Converse</option>
        <option value="Adidas">Adidas</option>
        <option value="Vans">Vans</option>
        <option value="Puma">Puma</option>
        <option value="Reebok">Reebok</option>
        <option value="NewBalance">New Balance</option>
        <option value="Saucony">Saucony</option>
        <option value="Asics">Asics</option>
        <option value="Under Armour">Under Armour</option>
        </select>
    </div>
  )
}

export default App;
