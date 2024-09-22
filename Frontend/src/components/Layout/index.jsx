import Footer from "../Footer";
import Navbar from "../Navbar";
import PropTypes from "prop-types";

export default function Layout({ children, navBarBg }) {
  return (
    <>
      <Navbar bg={navBarBg} />
      {children}
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navBarBg: PropTypes.string,
};
