import "./App.css";
import Habbitcontainer from "./components/habbitfolder/Habbitcontainer";
import Headder from "./components/Headder";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;

    // store.subscribe(() => {
    //   console.log("UPDATED");
    //   // this.forceUpdate();
    // });
    /// make Api call
    // dispatch app
    // const habbits = {
    //   title: "xyz",
    //   fav: false,
    //   daylist: [0, 0, 0, 0, 0, 0, 0],
    // };
    // store.dispatch({
    //   type: "ADD_HABBIT",
    //   habbits: habbits,
    // });
    console.log(this.props, "in App");
  }

  // console.log(props.getState());
  render() {
    // const { habbits } = this.props.store.getState();
    // const habbits = store.habbits;

    const { habbits } = this.props;
    console.log(habbits, "in app");
    return (
      <div className="App">
        {/* <h1>Hi</h1> */}
        <Headder />
        <div className="main-container">
          <div className="sidebar">
            <h1>Navigation</h1>
            <Sidebar />
          </div>{" "}
          <div className="habbit-container">
            <h1>All ur habbits</h1>
            <Habbitcontainer
            // habbits={habbits}
            // dispatch={this.props.store.dispatch}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function callback(state) {
  return {
    habbits: state.habbits,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
