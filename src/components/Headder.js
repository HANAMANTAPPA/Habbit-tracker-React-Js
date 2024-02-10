function Headder(store) {
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
        <input type="text" />
        <button>Add Habbit</button>
        {/* <div className="add-habbit-container" style={{ position: "absolute" }}>
          Hey hellow{" "}
        </div> */}
      </div>
    </div>
  );
}

export default Headder;
