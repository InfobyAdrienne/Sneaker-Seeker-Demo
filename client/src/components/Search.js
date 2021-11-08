import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
 
const Search = (props) => {
      const [currentBrand, setCurrentBrand] = useState('')
      
      const handleChange = (event) => {
        event.preventDefault();
        setCurrentBrand(event.target.value);
      };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(currentBrand);
    // let path = `/api?brand=${currentBrand}`;
    //       if (props.redirect) {
    //     history.push('/tracks/' + songname);
    //     }
      };
  //     const changeBrand = (newBrand) => {
  //       setCurrentBrand(newBrand)
  //     }
  
  console.log(currentBrand)
  // console.log(changeBrand)
  
  return (
    <div>
    <h1>Find your perfect Sneaker</h1>
          <h3> Use the search engine to generate matches</h3>
      <Form>
        <div className="container p-5">
          <Form.Select className="custom-select"
            onChange={handleChange}
            // {(event) => changeBrand(event.target.value)}
            // value={currentBrand}
          >
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
        <Form.Select className="custom-select" defaultValue="">
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
        <Form.Select className="custom-select" defaultValue="">
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
      <Button variant="primary" type="submit" value="Submit" onSubmit={handleSubmit} >
          Submit
      </Button>
      </Form>
    </div>

    )
}
export default Search;