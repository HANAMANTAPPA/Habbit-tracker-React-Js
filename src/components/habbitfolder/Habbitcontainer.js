// import styled from "styled-components";
import React from "react";
// import Habbit from "./habbit";
import Progress from "./Progress";

class Habbitcontainer extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   console.log("UPDATED");
    //   // this.forceUpdate();
    // });
    console.log(this.props, "in habbit");
  }
  // fun = () => {
  //   // const store = this.props;
  //   console.log(this.props, "in habbit function  ");
  // };
  render() {
    const { habbits } = this.props;
    return (
      <div className="hbt-container">
        {/* {habbits.map((habit, index) => (
          // console.log(habit, "ha ha ha "),
          <Habbit key={`habit${index}`} habit={habit} />
        ))} */}
        {habbits.map((habit, index) => (
          // console.log(habit, "ha ha ha "),
          <Progress key={`habit${index}`} habit={habit} />
        ))}
        {/* <Progress />
        <Progress /> */}
      </div>
    );
  }
}

export default Habbitcontainer;

// const hbstyled = styled.div`
//   background-color: black;
// `;
