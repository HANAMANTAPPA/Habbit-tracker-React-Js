import avatar from "../imgs/avatar.png";
// import signout from "../imgs/avatar.png";
import { menuItems } from "../utils/menuItems";

function Sidebar({ active, setActive }) {
  return (
    <div>
      <div className="user-con">
        <img src={avatar} alt="" />
      </div>
      <div className="text">
        <h2>HK</h2>
        <p>Your Habbit tracker</p>
      </div>
      <div>
        <ul className="menu-items">
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
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
