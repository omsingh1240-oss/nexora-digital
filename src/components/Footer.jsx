import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Nexora<span className="text-blue-400">.</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              We help businesses grow through modern web design,
              branding, and digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>Web Design</li>
              <li>UI/UX Design</li>
              <li>SEO</li>
              <li>Branding</li>
              <li>Marketing</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 text-white hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 text-white hover:bg-blue-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 text-white hover:bg-blue-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 text-white hover:bg-blue-600 transition"
              >
                <FaXTwitter />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Nexora Digital. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;