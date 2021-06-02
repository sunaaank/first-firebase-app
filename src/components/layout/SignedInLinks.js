import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartNoti from '../cart/CartNoti';

const SignedInLinks = () => {
  const cartItems = useSelector(store => store.cartReducer);
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
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <CartNoti itemCount={cartItems.length} width="32" height="32" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            MY
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
