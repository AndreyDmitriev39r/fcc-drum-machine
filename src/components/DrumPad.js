function Drumpad({id, text, audioSource}) {
  return (
    <button
      id={id}
      className="drum-pad"
    >
      {text}
      <audio
        id={text}
        className="clip"
        src={audioSource}
      ></audio>
    </button>
  );
}

export default Drumpad;