import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../cart/CartItem';
import CheckBox from '../cart/CheckBox';

export default function CartList() {
  const cartItems = useSelector(store => store.cartReducer);

  return (
    <ListContainer>
      <Title>장바구니</Title>
      <CartTable>
        <tbody>
          <CartHeader>
            <td>
              <CheckBox />
            </td>
            <td>
              <span>전체 선택 3/3</span>
            </td>
            <td>
              <span>상품정보</span>
            </td>
            <td>
              <span>수량</span>
            </td>
            <td>
              <span>상품금액</span>
            </td>
            <td />
          </CartHeader>
          {cartItems.map((e, i) => (
            <CartItem {...e} key={e.product_img + i} idx={i} />
          ))}
        </tbody>
      </CartTable>
      <OrderTotal>
        <CheckContainer>
          <CheckBox />
          <SelectCount>전체선택 3/3</SelectCount>
          <CancleBtn>선택 취소</CancleBtn>
        </CheckContainer>
        <TotalPrice>
          <span>결제예정금액</span>
          <span>
            {cartItems
              .reduce((acc, cur) => {
                return (acc += cur.price);
              }, 0)
              .toLocaleString()}
            원
          </span>
        </TotalPrice>
      </OrderTotal>
      <OrderBtnContainer>
        <button>주문하기</button>
      </OrderBtnContainer>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 1096px;
  margin: 0 auto;

  tr:last-of-type {
    border-bottom: 1px solid #000000;
  }
`;

const Title = styled.p`
  margin-top: 67px;
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 28px;
`;

const CartTable = styled.table`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
`;

const CartHeader = styled.tr`
  height: 72px;
  border-bottom: 1px solid #000000;
  background: #fffef8;

  td {
    vertical-align: middle;
    text-align: center;

    &:first-of-type {
      padding-left: 29px;
    }
  }
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 30px;
  font-size: 15px;
`;

const SelectCount = styled.span`
  margin-left: 26px;
  margin-right: 41px;
`;

const CancleBtn = styled.button`
  all: unset;
  width: 110px;
  height: 40px;
  margin-left: 40px;

  background: #000000;
  border-radius: 3px;

  font-weight: bold;
  font-size: 15px;
  text-align: center;

  color: #ffffff;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 480px;
  height: 84px;

  padding-left: 51px;
  padding-right: 40px;

  background: #fffef8;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);

  span {
    &:first-of-type {
      font-size: 15px;
    }

    &:last-of-type {
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

const OrderBtnContainer = styled.div`
  margin-top: 30px;
  text-align: right;

  button {
    width: 180px;
    height: 50px;

    background: #e82c23;
    border: 1px solid #000000;
    border-radius: 3px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);

    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
  }
`;
