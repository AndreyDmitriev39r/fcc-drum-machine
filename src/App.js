import { useEffect, useState, useRef } from 'react';

import Heading from "./components/Heading";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

import drumPadsData from "./data";

function App() {

  // ref

  const refsCollection = Array(drumPadsData.length).fill(useRef(null));

  

  // state

  const [displayText, setDisplaytext] = useState('Click da buttons!');

  const handleClick = (event, ref) => {    
    event.target.lastChild.play();
    setDisplaytext(event.target.id);
  }

  const handleKeyPress = (event) => {

    const triggeredDrumPad = drumPadsData
      .filter(drumPad => drumPad.text === event.key.toUpperCase());
    
    if (!triggeredDrumPad.length) return;

    document.getElementById(triggeredDrumPad[0].text).play();

    setDisplaytext(triggeredDrumPad[0].id);
  }

  // side effects

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  // rendering

  const drumPads = drumPadsData.map((drumPad, index) =>
    <DrumPad
      id={drumPad.id}
      text={drumPad.text}
      audioSource={drumPad.source}
      key={drumPad.id}
      clickHandler={handleClick}
      ref={refsCollection[index]}
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
