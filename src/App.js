import { useEffect, useState } from 'react';

import Heading from "./components/Heading";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

import drumPadsData from "./data";

function App() {

  // state

  const [displayText, setDisplaytext] = useState('Click da buttons!');  

  const changeDisplayTextOnClick = (event) => {    
    setDisplaytext(event.target.id);
  }

  const changeDisplayTextOnKeyDown = (id) => {
    setDisplaytext(id);
  }

  // rendering

  const drumPads = drumPadsData.map((drumPad) =>
    <DrumPad
      id={drumPad.id}
      text={drumPad.text}
      audioSource={drumPad.source}
      key={drumPad.id}
      changeDisplayTextOnClick={changeDisplayTextOnClick}
      changeDisplayTextOnKeyDown={changeDisplayTextOnKeyDown}
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
