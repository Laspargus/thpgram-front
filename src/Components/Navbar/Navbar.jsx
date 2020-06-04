import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./../../Redux/Auth/actions";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/register">Sign Up</Link>
          </Menu.Item>

          {isAuthenticated && (
            <Menu.Item key="4">
              <Link to="/logout" onClick={handleSignOut}>
                Sign Out
              </Link>
            </Menu.Item>
          )}

          {isAuthenticated && (
            <Menu.Item key="5">
              <Link to="/myprofile">My Profile</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
