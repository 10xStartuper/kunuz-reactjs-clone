import React from "react";
import Areas from "../components/Areas";
import Navbar from "../components/Navbar/";
import Featured from "../components/Sections/Featured/Featured";
import styled from "styled-components";
import BarPosts from "../components/Sections/Posts/BarPosts";
const Container = styled.div`
  padding: 0px 36px;
`;
const NewsDivider = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 9;
`;
const Right = styled.div`
  flex: 3;
  padding: 10px;
`;
const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Areas />
        <NewsDivider>
          <Left>
            <Featured />
          </Left>
          <Right>
            <BarPosts>Hello world</BarPosts>
          </Right>
        </NewsDivider>
      </Container>
    </div>
  );
};

export default Home;
