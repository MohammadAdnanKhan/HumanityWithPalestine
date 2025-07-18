import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Boycott", path: "/boycott" },
    { name: "Mail Protest", path: "/mailprotest" },
    { name: "Suggestions", path: "/suggestions" },
    { name: "About", path: "/about" },
  ];

  const moreLinks = [
    { name: "Donate", path: "/donate" },
    { name: "Education", path: "/education" },
    { name: "Feedback", path: "/feedback" },
  ];

  return (
    <div className="bg-[#1A1A1A] text-white font-serif sticky top-0 z-50 shadow-md w-full">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <NavLink to="/" title="Let's bring a change" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto animate-bounceSlow mr-2"
            />
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive ? "text-[#5C6BC0]" : "text-[#D7CCC8]"
                    } hover:text-[#5C6BC0]`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li tabIndex={0}>
              <details>
                <summary className="text-[#D7CCC8] hover:text-[#5C6BC0]">More</summary>
                <ul className="p-2 bg-[#2A2A2A] border border-[#90A4AE] rounded-md shadow text-sm">
                  {moreLinks.map((link) => (
                    <li key={link.name}>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `${isActive ? "text-[#5C6BC0]" : "text-[#D7CCC8]"} hover:text-[#5C6BC0]`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#5C6BC0]">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] px-4 pt-2 pb-4 space-y-2 text-base">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-1 font-medium ${
                  isActive ? "text-[#5C6BC0]" : "text-[#D7CCC8]"
                } hover:text-[#5C6BC0]`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <details className="mt-2">
            <summary className="cursor-pointer text-[#D7CCC8] hover:text-[#5C6BC0]">
              More
            </summary>
            <ul className="pl-4 pt-1">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 ${
                        isActive ? "text-[#5C6BC0]" : "text-[#D7CCC8]"
                      } hover:text-[#5C6BC0]`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>
        </div>
      )}
    </div>
  );
};

export default Navbar;
