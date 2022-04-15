import React, { forwardRef } from 'react';
import { NavbarStyled } from './NavbarStyled';

import logo from './img/slack.svg';
import { OuterLayout } from '../../Styling/Layout/Layout';

const Navbar = forwardRef(({ children }, ref) => {
  return (
    <NavbarStyled ref={ref} className="Headds">
      <OuterLayout>
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="hashtag">#BlackWomenRule</div>
        </div>
      </OuterLayout>
    </NavbarStyled>
  );
});

export default Navbar;
