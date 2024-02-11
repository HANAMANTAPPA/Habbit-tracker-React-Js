import { connect } from "react-redux";
import { useState } from "react";

function Headder(props) {
  const { inputVal, setInputVal } = useState("zxcz");
  const { dispatch } = props;
  console.log(dispatch, "in headder ");
  function handleInput(e) {
    const text = e.target.value;
    console.log(text.length);
    setInputVal(text);
    // toast("hello", {
    //   position: toast.position.TOP_CENTER,
    // });
  }
  const addhabbitfun = () => {
    const text = inputVal;
    console.log(text);
    // if (text.length === 0) {
    //   toast("Habit never can be empty ");
    // }
  };
  return (
    <div className="headder">
      <h5 style={{ marginLeft: "25px" }}>HOME</h5>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          height: "30px",
          alignSelf: "center",
        }}
      >
        <input type="text" onChange={handleInput} />
        <button onClick={addhabbitfun}>Add Habbit</button>
      </div>
    </div>
  );
}

// callback function to set the props

function callback(state) {
  return {};
}

const connectedComponent = connect(callback)(Headder);
export default connectedComponent;
