import React from 'react';
import { NavLink } from 'react-router-dom';
class Aside extends React.Component {
  render() {
    return (
      <>
        <div>
          <h2>Navigation</h2>
          <ul>
            <NavLink activeclassName='active' exact to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink activeclassName='active' to='/articles'>
              <li>Articles</li>
            </NavLink>
            <NavLink activeclassName='active' to='/contact'>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </>
    );
  }
}
export default Aside;
