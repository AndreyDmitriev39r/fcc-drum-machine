import { forwardRef } from "react";

const DrumPad = forwardRef(function DrumPad({id, text, audioSource, clickHandler}, ref) {
  const test =()=>console.log(ref.current);
  return (
    <button
      id={id}
      className="drum-pad"
      onClick={clickHandler}
      onMouseOver={test}
    >
      {text}
      <audio
        id={text}
        className="clip"
        src={audioSource}
        ref={ref}
      ></audio>
    </button>
  );
});

export default DrumPad;