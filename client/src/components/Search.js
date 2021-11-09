import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { useNavigate } from 'react-router-dom'
// import Unirest from 'unirest'
  
function Search() {
  
  // const [query, setQuery] = useState('');
  
  const [sneakers, setSneakers] = useState([]);
  const [data, setData] = useState({
    brand: '',
    gender: '',
    colorway: ''
  })

  const url = `http://localhost:3001/api?brand=${data.brand}&gender=${data.gender}&colorway=${data.colorway}`
  
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.results);
      setSneakers(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  // function fetchData(e) {
    // e.preventDefault();
    // Unirest
    //   .post(`http://localhost:3001/api?brand=${data.brand}&gender=${data.gender}&colorway=${data.colorway}`)
    //   .headers({ Accept: 'application/json', 'Content-Type': 'application/json' })
    //   .send({
    //     brand: data.brand,
    //     gender: data.gender,
    //     colorway: data.colorway
    //   })
    //   .then((res) => {
    //       console.log(res.data);
    // });
  // }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return (
    <div>
    <h1>Find your perfect Sneaker</h1>
      <h3> Use the search engine to generate matches</h3>
      
      <form onSubmit={(e) => fetchData(e)}>

      <div className="container p-5">  
        <Form.Select className="custom-select"
            onChange={(e) => handle(e)}
            id='brand'
            value={data.brand} >
            <option hidden value="">Brand</option>
            <option value="NIKE">Nike</option>
            <option value="JORDAN">Jordan</option>
            <option value="CONVERSE">Converse</option>
            <option value="ADIDAS">Adidas</option>
            <option value="VANS">Vans</option>
            <option value="PUMA">Puma</option>
            <option value="REEBOK">Reebok</option>
            <option value="NEW%20BALANCE">New Balance</option>
            <option value="SAUCONY">Saucony</option>
            <option value="ASICS">Asics</option>
            <option value="AIR%20JORDAN">Under Armour</option>
        </Form.Select>
    </div>

    <div className="container p-5">     
      <Form.Select className="custom-select"
            onChange={(e) => handle(e)}
            id='gender'
            value={data.gender} >
              <option hidden value="">Gender</option>
              <option value="MEN">Man</option>
              <option value="WOMEN">Women</option>
              <option value="CHILD">Child</option>
              <option value="INFANT">Infant</option>
              <option value="PRESCHOOL">Preschool</option>
              <option value="TODDLER">Toddler</option>
              <option value="UNISEX">Unisex</option>
        </Form.Select>
        </div>
        
      <div className="container p-5">
      <Form.Select className="custom-select"
            onChange={(e) => handle(e)}
            id='colorway'
            value={data.colorway} >
              <option hidden value="">Colour</option>
              <option value="RED">Red</option>
              <option value="BLACK">Black</option>
              <option value="BLUE">Blue</option>
              <option value="PURPLE">Purple</option>
              <option value="ORANGE">Orange</option>
              <option value="GREEN">Green</option>
              <option value="YELLOW">Yellow</option>
              <option value="PINK">Pink</option>
              <option value="WHITE">White</option>
              <option value="BROWN">Brown</option>
              <option value="GREY">Grey</option>
      </Form.Select>
            </div>
            
            <Button variant="primary" type="Submit" value="Submit">
          Submit
      </Button>
    </form>
      </div>
    )
}
export default Search;