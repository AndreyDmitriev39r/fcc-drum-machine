import Heading from "./components/Heading";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

import drumPadsData from "./data";

function App() {  

  const drumPads = drumPadsData.map((drumPad) =>
    <DrumPad
      id={drumPad.id}
      text={drumPad.text}
      audioSource={drumPad.source}
      key={drumPad.id}
    />
  )

  return (
    <>
      <Heading />
      <Display />
      <div id="drumpad-container">
        {drumPads}
      </div>      
    </>
  );
}

export default App;
