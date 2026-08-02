import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto mt-5 px-6">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold text-white"
          >
            Nexora<span className="text-blue-400">.</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-slate-300 hover:text-white transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-white text-3xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-6 md:hidden">

            <ul className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-slate-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

            </ul>

            <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white">
              Let's Talk
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;