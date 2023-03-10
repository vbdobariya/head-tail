import React, { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([[]]);

  const printvalue = (value) => {
    const data = messages[messages.length - 1][0];
    if (data !== value) {
      messages.push([]);
    }
    messages[messages.length - 1].push(value);
    setMessages([...messages]);
    console.log("printvalue---------------->", messages);
  };

  return (
    <>
      <div>
        <button onClick={() => printvalue("H")}>Head</button>
        <button onClick={() => printvalue("T")}>Tail</button>
        <div style={{ display: "flex"}}>
            {messages.map((value) => (
              <div>
                {value.map((value) => (
                  <ul>{value}</ul>
                ))}
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default App;
