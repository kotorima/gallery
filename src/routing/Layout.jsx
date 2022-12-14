import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => <div>{children}</div>;

Layout.defaultProps = {
	children: [],
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
