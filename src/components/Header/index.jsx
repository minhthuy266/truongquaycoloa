import { Menu } from "antd";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { SubMenu } = Menu;

  const GallerySubMenu = () => {
    return (
      <Menu>
        <Menu.Item key="1">
          <Link to="/gallery/images">Hình ảnh</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/gallery/videos">Video</Link>
        </Menu.Item>
      </Menu>
    );
  };

  const GalleryNavLink = ({ children }) => {
    return (
      <Menu mode="horizontal" className="bg-transparent">
        <SubMenu
          title={children}
          className="text-white font-bold hover:after:border-b-transparent"
        >
          <GallerySubMenu />
        </SubMenu>
      </Menu>
    );
  };

  GalleryNavLink.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <nav
      className="bg-gray-800 p-4 w-[100vw] fixed top-0 right-0 left-0 bg-center bg-opacity-0 global-text-base flex items-center z-50"
      style={{
        backgroundImage:
          "url('http://truongquaycoloa.com/sites/all/themes/midnight/imgs/maxresdefault.jpg')",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          <img
            src="http://truongquaycoloa.com/sites/default/files/logo_0.jpg"
            alt="Home"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-20 opacity-100 items-center">
          <NavLink to="/"></NavLink>
          <NavLink to="/gioi-thieu">GIỚI THIỆU</NavLink>
          <NavLink to="/tin-tuc">TIN TỨC</NavLink>
          {/* <NavLink to='/dich-vu'>DỊCH VỤ</NavLink> */}
          <NavLink to="/phim-sap-chieu">PHIM SẮP CHIẾU</NavLink>
          <NavLink to="/lich-chieu-phim">LỊCH CHIẾU PHIM</NavLink>
          <GalleryNavLink to="/gallery">GALLERY</GalleryNavLink>
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-white">
            <FaFacebook style={{ fontSize: "24px" }} />
          </a>
          <a href="#" className="text-white">
            <FaTwitter style={{ fontSize: "24px" }} />
          </a>
          <a href="#" className="text-white">
            <FaGoogle style={{ fontSize: "24px" }} />
          </a>
          <a href="#" className="text-white">
            <FaYoutube style={{ fontSize: "24px" }} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          <MobileNavLink to="/">GIỚI THIỆU</MobileNavLink>
          <MobileNavLink to="/about">TIN TỨC</MobileNavLink>
          <MobileNavLink to="/services">DỊCH VỤ</MobileNavLink>
          <MobileNavLink to="/contact">PHIM SẮP CHIẾU</MobileNavLink>
          <MobileNavLink to="/contact">LỊCH CHIẾU PHIM</MobileNavLink>
          <MobileNavLink to="/contact">GALLERY</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseClass =
    "text-white hover:text-gray-300 transition duration-300 font-bold";
  const activeClass = isActive ? "pb-1 border-b-2 border-white" : "";
  const combinedClass = `${baseClass} ${activeClass}`;

  return (
    <Link to={to} className={combinedClass}>
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-gray-300 transition duration-300 flex items-center"
  >
    {children}
  </Link>
);

export default Header;

MobileNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
