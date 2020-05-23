import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config'
import { signout, isAuth, getLoggedInUser } from '../actions/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

//  import '../node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold"> {APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink>Blogs</NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>

              {isAuth() && getLoggedInUser()["role"] === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink>{`${getLoggedInUser()["name"]}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && getLoggedInUser()["role"] === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink>{`${getLoggedInUser()["name"]}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

              {!isAuth() && (
                <React.Fragment>
                  <NavItem>
                    <Link href="/signin">
                      <NavLink>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <NavLink>Signup</NavLink>
                    </Link>
                  </NavItem>
                </React.Fragment>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink onClick={() => signout(() => Router.replace(`/signin`))}>
                    Signout
                </NavLink>
                </NavItem>
              )}


            </React.Fragment>

            <NavItem>
              <a href="/user/crud/blog" className="btn btn-primary text-light">
                Write a blog
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;