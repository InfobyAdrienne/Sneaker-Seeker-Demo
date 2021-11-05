import React, { useState, useEffect } from 'react'

function DataFetching() {
  const [sneakers, setSneakers] = useState( [] );

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data) =>
        console.log(data));
    // setSneakers(data));
  }, []);

  return (
    <div>
      <ul>
        <li>
       {/* {sneakers.count} */}
        </li>
      </ul>
    </div>
  )
}

export default DataFetching