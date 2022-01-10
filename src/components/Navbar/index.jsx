import React from "react";
import { ChevronDown, Search } from "react-feather";
import styled from "styled-components";
import { logo } from "../../assets/";

const Container = styled.div`
  background-color: #fff;
  color: rgb(0, 0, 0);
  padding: 10px 36px;
  box-shadow: 0 0 24 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img``;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 36px;
`;
const Item = styled.div`
  font-size: 14px;
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 19px;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Language = styled.div`
  cursor: pointer;
  padding: 0px 0px 0px 14px;
  border-radius: 20px;
  background-color: #e7e7e7;
  font-weight: 400;
  color: #000;
  font-size: 12px;
  letter-spacing: -0.05px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 120px;
`;

const ToglleLang = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  background-color: #f4f4f4;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: 0.3s all;
    background-color: #fff;
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  background-color: #e7e7e7;
  margin-left: 10px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <Container>
      <LeftBox>
        <Logo src={logo} />
        <Menu>
          <Item>O‘ZBEKISTON</Item>
          <Item>JAHON</Item>
          <Item>IQTISODIYOT</Item>
          <Item>JAMIYAT</Item>
          <Item>FAN-TEXNIKA</Item>
          <Item>SPORT</Item>
          <Item>BUSINESS</Item>
        </Menu>
      </LeftBox>
      <RightBox>
        <Language>
          <div>O'zbekcha</div>
          <ToglleLang>
            <ChevronDown color="#585858" size={20} />
          </ToglleLang>
        </Language>
        <SearchBox>
          <Search color="#585858" size="20" />
        </SearchBox>
      </RightBox>
    </Container>
  );
};

export default Navbar;
