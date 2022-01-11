import React from "react";
import styled from "styled-components/";

const Container = styled.div`
  color: rgb(0, 0, 0);
  box-shadow: 0 0 24 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  /* justify-content: ; */
  background: #e7e7e7;
  min-height: 40px;
`;

const HeadAItemne = styled.div`
  background-color: #17206a;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  min-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -12px;
    width: 0;
    height: 0;
    margin: auto;
    border-style: solid;
    border-width: 20px 0 20px 12px;
    border-color: transparent transparent transparent #17206a;
  }
`;

const AreaItems = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100px;
`;
const AItem = styled.a`
  flex: 1;
  font-size: 12px;
  color: #585858;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 40px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  &:before {
    content: " ";
    display: block;
    width: 1px;
    height: 12px;
    background: #585858;
    margin: 0 8px;
    box-sizing: border-box;
  }
  &:first-child:before {
    background: transparent;
  }
`;

const Areas = () => {
  return (
    <Container>
      <HeadAItemne>Hududlar</HeadAItemne>
      <AreaItems>
        <AItem href="/uz/region/toshkent">Toshkent</AItem>
        <AItem href="/uz/region/qoraqalpogiston">Qoraqalpog‘iston</AItem>
        <AItem href="/uz/region/andijon">Andijon</AItem>
        <AItem href="/uz/region/fargona">Farg‘ona</AItem>
        <AItem href="/uz/region/namangan">Namangan</AItem>
        <AItem href="/uz/region/samarqand">Samarqand</AItem>
        <AItem href="/uz/region/buxoro">Buxoro</AItem>
        <AItem href="/uz/region/xorazm">Xorazm</AItem>
        <AItem href="/uz/region/surxondaryo">Surxondaryo</AItem>
        <AItem href="/uz/region/qashqadaryo">Qashqadaryo</AItem>
        <AItem href="/uz/region/jizzax">Jizzax</AItem>
        <AItem href="/uz/region/sirdaryo">Sirdaryo</AItem>
        <AItem href="/uz/region/toshkent-viloyati">Toshkent vil.</AItem>
        <AItem href="/uz/region/navoiy">Navoiy</AItem>
      </AreaItems>
    </Container>
  );
};

export default Areas;
