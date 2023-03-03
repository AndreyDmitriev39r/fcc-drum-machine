function Drumpad({id, text, audioSource, clickHandler}) {
  return (
    <button
      id={id}
      className="drum-pad"
      onClick={clickHandler}
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