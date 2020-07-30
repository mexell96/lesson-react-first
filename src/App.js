import React from "react";

function App(props) {
  console.log(props)
  const style = { color: "green"};

  return (
    <h1 style={style}>
      <p>{props.text}</p>
    </h1>
  );
}

export default App;