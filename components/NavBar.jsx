import NavMenu from "./NavMenu.jsx";
import { NavData } from "./NavData.jsx";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>Logo</div>
      <button
        type="button"
        className="hs-collapse-toggle"
        id="hs-basic-collapse"
        data-hs-collapse="#hs-basic-collapse-menu"
      >
        Collapse
      </button>
      <ul
        className="hs-collapse hidden overflow-hidden transition-[height] duration-300"
        id="hs-basic-collapse-menu"
        aria-labelledby="hs-basic-collapse"
      >
        {NavData.map((data, index) => (
          <NavMenu key={index} {...data} />
        ))}
      </ul>
    </nav>
  );
}
