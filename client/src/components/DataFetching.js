import React, { useState, useEffect } from 'react'

function DataFetching() {
  const [sneakers, setSneakers] = useState( [] );

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data) =>
        // console.log(data));
    setSneakers(data.results));
  }, []);

  return (
    <div>
      <ul>
        {sneakers.map(sneaker => (
          <li key={sneaker.id}>{sneaker.shoe}</li>
          ))}
      </ul>
    </div>
  )
}

export default DataFetching