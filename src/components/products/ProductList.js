import React from 'react';
import styled from 'styled-components';
import ProductCard from '../cart/ProductCard';
import UserList from './UserList';

function ProductList() {
  return (
    <ListContainer>
      <Title>상품 목록</Title>
      <Line />
      <UserList />
      <CardContainer>
        {CART_ITEM.map((e, i) => (
          <ProductCard key={i} item={e} />
        ))}
      </CardContainer>
    </ListContainer>
  );
}

export default ProductList;

const ListContainer = styled.div`
  width: 1096px;
  margin: 0 auto;
`;

const Title = styled.p`
  margin-top: 67px;
  margin-bottom: 22px;
  font-weight: 900;
  font-size: 28px;
`;

const Line = styled.div`
  height: 2px;
  margin-top: 22px;
  margin-bottom: 29px;
  background-color: black;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CART_ITEM = [
  {
    isChecked: true,
    product_name: '플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701',
    product_id: 1304,
    product_img: 'images/tShirt.jpg',
    price: 33250,
  },
  {
    isChecked: true,
    product_name: '르아브 미니멀리즘 네이비 블루 셔츠',
    product_id: 4204,
    product_img: 'images/blueShirts.png',
    price: 43250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/piShirts.png',
    price: 103250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/pants.png',
    price: 53250,
  },
  {
    isChecked: true,
    product_name: '플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701',
    product_id: 1304,
    product_img: 'images/tShirt.jpg',
    price: 33250,
  },
  {
    isChecked: true,
    product_name: '르아브 미니멀리즘 네이비 블루 셔츠',
    product_id: 4204,
    product_img: 'images/blueShirts.png',
    price: 43250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/piShirts.png',
    price: 103250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/pants.png',
    price: 53250,
  },
  {
    isChecked: true,
    product_name: '플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701',
    product_id: 1304,
    product_img: 'images/tShirt.jpg',
    price: 33250,
  },
  {
    isChecked: true,
    product_name: '르아브 미니멀리즘 네이비 블루 셔츠',
    product_id: 4204,
    product_img: 'images/blueShirts.png',
    price: 43250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/piShirts.png',
    price: 103250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/pants.png',
    price: 53250,
  },
  {
    isChecked: true,
    product_name: '플루크 new 피그먼트 오버핏 반팔 티셔츠 FST701',
    product_id: 1304,
    product_img: 'images/tShirt.jpg',
    price: 33250,
  },
  {
    isChecked: true,
    product_name: '르아브 미니멀리즘 네이비 블루 셔츠',
    product_id: 4204,
    product_img: 'images/blueShirts.png',
    price: 43250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/piShirts.png',
    price: 103250,
  },
  {
    isChecked: true,
    product_name: '랩12 20SS 오픈 카라/투 버튼 피케 티셔츠',
    product_id: 4204,
    product_img: 'images/pants.png',
    price: 53250,
  },
];
