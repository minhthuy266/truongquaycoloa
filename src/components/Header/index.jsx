import { Drawer, Menu } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Header_Logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClose = () => {
    setOpen(false);
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

  const GalleryNavLink = ({ children, to }) => {
    const isActive = location.pathname === to || location.pathname.includes(to);

    const baseClass =
      "text-white hover:text-gray-300 transition duration-300 font-bold pb-1";
    const activeClass = isActive ? "border-b-2 border-white" : "";
    const combinedClass = `${baseClass} ${activeClass}`;

    return (
      <div>
        <Menu mode="horizontal" className={`bg-transparent ${combinedClass}`}>
          <SubMenu
            title={children}
            className="text-white font-bold hover:after:border-b-transparent w-[73px] h-[28px] !flex !items-center justify-center"
          >
            <GallerySubMenu />
          </SubMenu>
        </Menu>
      </div>
    );
  };

  GalleryNavLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
  };

  return (
    <nav className="bg-[#066398] p-4 w-[100vw] fixed top-0 right-0 left-0 bg-center global-text-base flex items-center z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          <img src={Logo} alt="Home" width={100} height="auto" />
        </Link>

        <div className="flex space-x-8 items-center ">
          {/* Navigation Links */}
          <div className="hidden c1:flex space-x-14 c1:space-x-20 items-center mr-14">
            <NavLink to="/"></NavLink>
            <NavLink to="/gioi-thieu">GIỚI THIỆU</NavLink>
            <NavLink to="/tin-tuc">TIN TỨC</NavLink>
            {/* <NavLink to='/dich-vu'>DỊCH VỤ</NavLink> */}
            <NavLink to="/phim-sap-chieu">PHIM SẮP CHIẾU</NavLink>
            <NavLink to="/lich-chieu-phim">LỊCH CHIẾU PHIM</NavLink>
            <GalleryNavLink
              to="/gallery"
              className="w-[100px] global-text-base"
            >
              GALLERY
            </GalleryNavLink>
          </div>

          <div className="flex space-x-8">
            <a href="https://www.facebook.com/people/Tr%C6%B0%E1%BB%9Dng-Quay-C%E1%BB%95-Loa/100063192820419/?mibextid=LQQJ4d" target="_blank" rel="noreferrer" className="text-white hover:text-white">
              <FaFacebook style={{ fontSize: "24px" }} />
            </a>
            {/* <a href="#" className="text-white">
              <FaTwitter style={{ fontSize: "24px" }} />
            </a> */}
            <a href="mailto:coloastudio@gmail.com" target="_blank" rel="noreferrer" className="text-white hover:text-white">
              <FaGoogle style={{ fontSize: "24px" }} />
            </a>
            {/* <a href="#" className="text-white">
              <FaYoutube style={{ fontSize: "24px" }} />
            </a> */}
          </div>

          <div className="c1:hidden pl-20">
            <div
              onClick={showDrawer}
              className="c1:hidden cursor-pointer flex items-center bg-transparent border-none !outline-none hover:!bg-transparent focus:!outline-none"
            >
              <TiThMenu />
            </div>
            <Drawer onClose={onClose} open={open} width={300}>
              <MobileNavLink to="/gioi-thieu" onClick={onClose}>
                GIỚI THIỆU
              </MobileNavLink>
              <MobileNavLink to="/tin-tuc" onClick={onClose}>
                TIN TỨC
              </MobileNavLink>
              {/* <MobileNavLink to="/dich-vu" onClick={onClose}>
                DỊCH VỤ
              </MobileNavLink> */}
              <MobileNavLink to="/phim-sap-chieu" onClick={onClose}>
                PHIM SẮP CHIẾU
              </MobileNavLink>
              <MobileNavLink to="/lich-chieu-phim" onClick={onClose}>
                LỊCH CHIẾU PHIM
              </MobileNavLink>
              <MobileNavLink to="/gallery/images" onClick={onClose}>
                HÌNH ẢNH
              </MobileNavLink>
              <MobileNavLink to="/gallery/videos" onClick={onClose}>
                VIDEO
              </MobileNavLink>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  console.log("=====location====", location, to);
  const isActive = location.pathname === to || location.pathname.includes(to);

  const baseClass =
    "text-white hover:text-gray-300 transition duration-300 font-bold pb-1";
  const activeClass = isActive ? "border-b-2 border-white" : "";
  const combinedClass = `${baseClass} ${activeClass}`;

  return (
    <Link to={to} className={combinedClass}>
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  const isActive = location.pathname === to || location.pathname.includes(to);

  const baseClass = "transition duration-300 font-bold pb-1";
  const activeClass = isActive ? "border-b-2 border-black" : "";
  const combinedClass = `${baseClass} ${activeClass}`;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-black transition duration-300 flex items-center justify-end pt-4 pb-4 global-text-base`}
    >
      <span className={`${combinedClass} hover:text-black`}>{children}</span>
    </Link>
  );
};

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
