import React from 'react';
import { authService } from 'fbase';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartNoti from '../cart/CartNoti';

const SignedInLinks = () => {
  const cartItems = useSelector(store => store.cartReducer);

  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/product">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={onLogOutClick}>
            Log Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <CartNoti itemCount={cartItems.length} width="32" height="32" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="btn btn-floating pink lighten-1">
            MY
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
