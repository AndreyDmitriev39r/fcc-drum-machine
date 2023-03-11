import { useEffect, useRef } from 'react'

function Drumpad({id, text, audioSource, changeDisplayTextOnClick, changeDisplayTextOnKeyDown}) {

  //  ref
  const audioRef = useRef(null);
  
  // event handlers
  const handleClick = (e) => {
    audioRef.current.play();   
    changeDisplayTextOnClick(e);
  }
  const handleKeyPress = (event) => {
    const currentId = id;
    if (audioRef.current.id.toLowerCase() === event.key || audioRef.current.id === event.key) {
      audioRef.current.play();
      changeDisplayTextOnKeyDown(currentId);  
    }      
  }

  // effect
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [])

  return (
    <button
      id={id}
      className="drum-pad"
      onClick={handleClick}      
    >
      {text}
      <audio
        id={text}
        name={id}
        className="clip"
        src={audioSource}
        ref={audioRef}
      ></audio>
    </button>
  );
}

export default Drumpad;