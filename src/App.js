import { useState } from 'react';

import Heading from "./components/Heading";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

import drumPadsData from "./data";

function App() {

  // state

  const [displayText, setDisplaytext] = useState('Click da buttons!');

  const handleClick = (event) => {
    setDisplaytext(event.target.id);
  }

  // rendering

  const drumPads = drumPadsData.map((drumPad) =>
    <DrumPad
      id={drumPad.id}
      text={drumPad.text}
      audioSource={drumPad.source}
      key={drumPad.id}
      clickHandler={handleClick}
    />
  )

  return (
    <>
      <Heading />
      <Display text={displayText} />
      <div id="drumpad-container">
        {drumPads}
      </div>      
    </>
  );
}

export default App;
