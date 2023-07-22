import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import "./SubNav.css";

interface link {
  path: string;
  icon: string;
  title: string;
}

interface Props {
  links: link[];
}

export const SubNav = ({ links }: Props) => {
  return (
    <div className="sub-nav__container">
      <Nav>
        {links.map((link: link) => (
          <NavItem key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `sub-nav__link ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">{link.icon}</span>
              <span className="link__text">{link.title}</span>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};
