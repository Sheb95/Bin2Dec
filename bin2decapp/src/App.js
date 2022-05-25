import "./App.css";
import React, { useState } from "react";

function App() {
   let [input, setInput] = useState("");
   //if input contains only 1's and zeros, then it is binary
   const isBinary = new RegExp("^[1/0]+$").test(input);
   const error = isBinary ? null : "Binary numbers only";
   const result = binaryToDec(input);

   function binaryToDec(string) {
      let strIndex = [];
      let sum = 0;

      for (let i = 0; i < string.length; i++) {
         strIndex.push(i);
      }
      const reversed = strIndex.reverse();

      for (let i = 0; i < reversed.length; i++) {
         if (string[i] !== "0") {
            sum += 2 ** reversed[i];
         }
      }
      return sum;
   }

   function handleChange(event) {
      setInput(event.target.value);
   }
   return (
      <div className="App">
         <h1>Binary to Decimal Converter</h1>
         <input type="text" onChange={handleChange}></input>
         {isBinary && <p>{result}</p>}
         <div>
            <p>{error}</p>
         </div>
      </div>
   );
}

export default App;
