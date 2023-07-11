import { useRef } from "react";
//const inputRef = useRef(null);
let inputValue = "";

const setInput = (value) => {
  inputValue = value;
};
const handleClick = () => {
  return (document.getElementById("textareaValue").innerText = inputValue);
};
const Content = () => {
  return (
    <div>
      <textarea
        placeholder="Write Something..."
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        cols={40}
      />
      <br />
      <br />
      <button onClick={handleClick}>Display</button>
      <h3 id="textareaValue">Write Something...</h3>
    </div>
  );
};

export default Content;
