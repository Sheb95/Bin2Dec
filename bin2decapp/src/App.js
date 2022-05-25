import "./App.css";
import React, { useState } from "react";

function App() {
   let [input, setInput] = useState("");
   //if input contains only 1's and zeros, then it is binary
   const isBinary = new RegExp("^[1/0]+$").test(input);
   const error = isBinary ? null : "Binary numbers only";
   function handleChange(event) {
      setInput(event.target.value);
   }
   return (
      <div className="App">
         <h1>Binary to Decimal Converter</h1>
         <input type="text" onChange={handleChange}></input>
         {isBinary && <p>{input}</p>}
         <div>
            <p>{error}</p>
         </div>
      </div>
   );
}

export default App;
