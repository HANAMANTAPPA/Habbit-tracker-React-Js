import avatar from "../imgs/avatar.png";
// import signout from "../imgs/avatar.png";

import { toggleTab } from "../actions";
import { connect } from "react-redux";
import React from "react";

class Sidebar extends React.Component {
  componentDidMount() {
    console.log("Component did mount in Sidebar");
  }
  handleDashboardTab = (boolVal) => {
    const { dispatch } = this.props;
    console.log(this.props);
    dispatch(toggleTab(boolVal));
  };
  render() {
    return (
      <div>
        <div className="user-con">
          <img src={avatar} alt="" />
        </div>
        <div className="text">
          <h2>HK</h2>
        </div>
        <div>
          {/* <ul className="menu-items">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? "active" : ""}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul> */}
          <div>
            <p
              className="sideBarTexts"
              onClick={() => this.handleDashboardTab(true)}
            >
              Dashboard
            </p>
            <p
              className="sideBarTexts"
              onClick={() => this.handleDashboardTab(false)}
            >
              Show week view
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// callback function to set the properties
function callback(state) {
  return {
    dashbordTab: state.dashbordTab,
  };
}
const connectedComponent = connect(callback)(Sidebar);
export default connectedComponent;
