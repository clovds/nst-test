import "./App.scss";
import React, { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [result, setResult] = useState(0);
  const [checkedItems, setcheckedItems] = useState([]);

  // Input box
  const handleInput = (e) => {
    const index = parseInt(e.target.id);
    const value = parseInt(e.target.value);
    if (index === 1) {
      setInput1(value);
    } else if (index === 2) {
      setInput2(value);
    } else if (index === 3) {
      setInput3(value);
    }
  };

  // Checkbox
  const handleChange = (e) => {
    const checkedItem = checkedItems;
    const isChecked = e.target.checked;
    const value = parseInt(e.target.value);
    const index = parseInt(e.target.id);

    if (!isChecked) {
      checkedItem.splice(index, 1);
      setcheckedItems(checkedItems);
    } else {
      checkedItem.splice(index, 0, value);
      setcheckedItems(checkedItems);
    }
  };

  // Button
  const executeBtn = (e) => {
    const id = parseInt(e.target.id);
    let res = 0;

    if (checkedItems.length === 1) {
      alert("Cannot Execute One Input Number");
    } else {
      if (id === 1) {
        res = checkedItems.reduce((a, b) => a + b, 0);
      } else {
        res = checkedItems[0];
        checkedItems.forEach((val, index) => {
          if (checkedItems[index + 1]) {
            if (id === 2) {
              res = res - checkedItems[index + 1];
            } else if (id === 3) {
              res = res * checkedItems[index + 1];
            } else if (id === 4) {
              res = res / checkedItems[index + 1];
            }
          }
        });
      }
    }
    setResult(res);
  };

  return (
    <div className="container">
      {/* Number Input & Checkbox */}
      <div className="input">
        <div className="ins-input">
          <input
            type="text"
            id="1"
            placeholder="Input Number"
            className="text-input"
            onChange={(e) => handleInput(e)}
          />
          <input
            type="checkbox"
            className="checkbox-input"
            id="0"
            name="1"
            value={input1}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="ins-input">
          <input
            id="2"
            type="text"
            placeholder="Input Number"
            className="text-input"
            onChange={(e) => handleInput(e)}
          />
          <input
            type="checkbox"
            className="checkbox-input"
            id="1"
            name="2"
            value={input2}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="ins-input">
          <input
            id="3"
            type="text"
            placeholder="Input Number"
            className="text-input"
            onChange={(e) => handleInput(e)}
          />
          <input
            type="checkbox"
            className="checkbox-input"
            id="2"
            name="3"
            value={input3}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* Execute Button */}
        <div className="execute-button">
          <button id="1" onClick={(e) => executeBtn(e)}>
            +
          </button>
          <button id="2" onClick={(e) => executeBtn(e)}>
            -
          </button>
          <button id="3" onClick={(e) => executeBtn(e)}>
            x
          </button>
          <button id="4" onClick={(e) => executeBtn(e)}>
            /
          </button>
        </div>
        <hr />

        {/* Output */}
        <div className="output">
          <h3>Hasil:</h3>
          <h3>{result}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
