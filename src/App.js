import "./App.css";
import Habbitcontainer from "./components/habbitfolder/Habbitcontainer";
import Headder from "./components/Headder";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("UPDATED");
      // this.forceUpdate();
    });
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
    console.log(this.props.store.getState(), "in App");
  }

  // console.log(props.getState());
  print = () => {};
  render() {
    const { habbits } = this.props.store.getState();
    // const habbits = store.habbits;
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
            <Habbitcontainer habbits={habbits} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
