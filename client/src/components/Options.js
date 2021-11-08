
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'

function Options() {
    const[options, setOptions] = useState("")
  
  return (
    <div>
    <h1>Find your perfect Sneaker</h1>
          <h3> Use the search engine to generate matches</h3>
    {/* <Form onSubmit={}> */}
    <Form>
        <div className="container p-5">
          <Form.Select className="custom-select" defaultValue="">
          <option hidden value="">Brand</option>
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
          </Form.Select>
      </div>
      <div className="container p-5">
        <Form.Select className="custom-select" defaultValue="">
        <option hidden value="">Gender</option>
          <option value="Men">Man</option>
          <option value="Women">Women</option>
          <option value="Child">Child</option>
          <option value="Infant">Infant</option>
          <option value="Preschool">Preschool</option>
          <option value="Toddler">Toddler</option>
          <option value="Unisex">Unisex</option>
          <option value="Youth">Youth</option>
        </Form.Select>
      </div>
      <div className="container p-5">
        <Form.Select className="custom-select" defaultValue="">
        <option hidden value="">Colour</option>
          <option value="Red">Red</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Orange">Orange</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Pink">Pink</option>
          <option value="White">White</option>
          <option value="Brown">Brown</option>
          <option value="Grey">Grey</option>
          </Form.Select>
      </div>
      <Button variant="primary" type="submit">
          Submit
      </Button>
        
      </Form>
    </div>
    )
}
export default Options;