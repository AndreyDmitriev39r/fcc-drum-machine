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
      <Display />
      {drumPads}
    </>
  );
}

export default App;
