import React from "react";
import Areas from "../components/Areas";
import Navbar from "../components/Navbar/";
import Featured from "../components/Sections/Featured/Featured";
import styled from "styled-components";
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
          <Right></Right>
        </NewsDivider>
      </Container>
    </div>
  );
};

export default Home;
