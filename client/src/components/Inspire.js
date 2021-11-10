import React from "react";

const Inspire = (props) => {
  // how do i want to present this? link of the day? actual shoe with link?
  const array = [
    "https://www.google.com",
    "https://www.twitter.com",
    "https://www.instagram.com",
  ];

  function randomizer() {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
  }

  return (
    <div>
      <h1>Inspire</h1>
      <a href={randomizer()}>Random Link</a>
    </div>
  );
};
export default Inspire;
