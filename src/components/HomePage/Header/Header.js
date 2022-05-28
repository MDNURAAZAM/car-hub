import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="fs-4">
            Doctor XYZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/services" className="text-white  fs-5">
                PRODUCTS
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-white fs-5">
                BLOG
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white fs-5">
                ABOUT
              </Nav.Link>
              {user && (
                <Nav.Link as={Link} to="/dashboard" className="text-white fs-5">
                  DASHBOARD
                </Nav.Link>
              )}
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none fs-5"
                  onClick={handleSignOut}
                >
                  SIGN OUT
                </button>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="text-white fs-5">
                    LOGIN
                  </Nav.Link>
                  <Nav.Link
                    eventKey={2}
                    as={Link}
                    to="/register"
                    className="text-white fs-5"
                  >
                    REGISTER
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
