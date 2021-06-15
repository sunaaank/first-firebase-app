import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CheckBox from './CheckBox';
import { deleteCart } from '../../store/actions';

export default function CartItem({
  isChecked,
  product_name,
  product_id,
  product_img,
  price,
  idx,
}) {
  const cartItems = useSelector(store => store.cartReducer);
  const dispatch = useDispatch();

  const filterItem = () => {
    const items = cartItems.filter((_, i) => {
      return i !== idx;
    });

    dispatch(deleteCart(items));
  };

  return (
    <Item>
      <CheckColumn>
        <CheckBox isChecked={isChecked} />
      </CheckColumn>
      <ImgColumn>
        <Img src={product_img} />
      </ImgColumn>
      <ProductInfo>
        <p>{product_name}</p>
        <p>{price.toLocaleString()} 원</p>
      </ProductInfo>
      <td>1</td>
      <td>{price.toLocaleString()} 원</td>
      <td>
        <DeleteCircle onClick={filterItem}>
          <DeleteIcon />
        </DeleteCircle>
      </td>
    </Item>
  );
}

const Item = styled.tr`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  td {
    vertical-align: middle;
    text-align: center;

    &:first-of-type {
      padding-left: 29px;
    }
  }
`;

const CheckColumn = styled.td`
  width: 80px;
`;

const ImgColumn = styled.td`
  width: 180px;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  background-image: url(${({ src }) => src});
  background-size: 56px 56px;
`;

const ProductInfo = styled.td`
  p {
    padding-left: 30px;
    color: #000000;
    text-align: left;

    &:first-of-type {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 18px;
    }

    &:last-of-type {
      font-size: 15px;
    }
  }
`;

const DeleteCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
`;

const DeleteIcon = styled.div`
  width: 15px;
  height: 20px;
  background-image: url('images/deleteIcon.png');
`;
