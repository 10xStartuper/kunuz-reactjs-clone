import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Calendar } from "react-feather";
import axios from "axios";
const Container = styled.div`
  padding: 10px;
`;
const Heading = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  display: block;
  padding-left: 25px;
  margin-bottom: 20px;
  &:before {
    width: 10px;
    height: 10px;
    background: transparent;
    border: 4px solid #17206a;
    display: block;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #fff;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Post = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(197, 197, 197, 0.8);
  margin-bottom: 18px;
`;
const DateWrapper = styled.div`
  display: flex;
  opacity: 0.8;
  color: #000000;
  font-size: 12px;
  padding: 5px 0px;
  
}
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: #000000;
`;

const BarPosts = (props) => {
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    axios.get("https://admin.daryo.uz/wp-json/wp/v2/posts").then((res) => {
      console.log(res.data.slice(0, 5));

      setLoading(res.data.slice(0, 5));
    });
  }, []);

  return (
    <Container>
      <Heading>So'ngi yangiliklar</Heading>
      <Posts>
        {loading.map((element) => (
          <Post key={element.id}>
            <DateWrapper>
              <Calendar size={16} />{" "}
              <div style={{ marginLeft: "5px" }}>{element.date}</div>
            </DateWrapper>
            <Text>{element.title.rendered}</Text>
          </Post>
        ))}
      </Posts>
    </Container>
  );
};

export default BarPosts;
