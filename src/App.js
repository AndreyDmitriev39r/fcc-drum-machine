import { useEffect, useState } from 'react';

import Heading from "./components/Heading";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

import drumPadsData from "./data";

function App() {

  // state

  const [displayText, setDisplaytext] = useState('Click da buttons!');

  const handleClick = (event) => {    
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
