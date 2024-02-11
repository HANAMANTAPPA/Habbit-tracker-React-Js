import React from "react";
import Habbit from "./habbit";
import Progress from "./Progress";
import { connect } from "react-redux";

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
    const { habbits, dashbordTab } = this.props;
    // const dashbordTab = false;
    return (
      <div className="hbt-container">
        {/* {habbits.map((habit, index) => (
          // console.log(habit, "ha ha ha "),
          <Habbit key={`habit${index}`} habit={habit} />
        ))} */}

        {dashbordTab
          ? habbits.map((habit, index) => (
              // console.log(habit, "ha ha ha "),
              <Habbit key={`habit${index}`} habit={habit} />
            ))
          : habbits.map((habit, index) => (
              // console.log(habit, "ha ha ha "),
              <Progress key={`habit${index}`} habit={habit} />
            ))}

        {/* <Progress />
        <Progress /> */}
      </div>
    );
  }
}

function callback(state) {
  return {
    habbits: state.habbits,
    dashbordTab: state.dashbordTab,
  };
}
const connectedComponent = connect(callback)(Habbitcontainer);
export default connectedComponent;
