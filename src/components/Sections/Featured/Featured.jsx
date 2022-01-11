import React from "react";
import { Calendar } from "react-feather";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0px;
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const Image = styled.img`
  width: 50%;
  /* padding-bottom: 34%; */
  position: relative;
  overflow: hidden;
`;
const TextWrapper = styled.div`
  width: 50%;
  padding: 25px;
  background: #eff2f7;
`;
const NewsMeta = styled.div`
  color: #8f8f8f;
  font-weight: 300;
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 10px;
`;
const Heading = styled.h2`
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  color: #000000;
  display: block;
`;

const Featured = () => {
  return (
    <Container>
      <Image
        src={
          "https://storage.kun.uz/source/thumbnails/_medium/8/pQiktjnCR5nls5PpVVh667W0Cc_CsHi9_medium.jpg"
        }
      />

      <TextWrapper>
        <NewsMeta>
          <Calendar size={12} /> 15:39 / 09.01.2022
        </NewsMeta>
        <Heading>
          Omikron O‘zbekistonda. SSV ehtiyot choralari kuchaytirilishini ma’lum
          qildi
        </Heading>
        <Description>
          Respublika maxsus komissiyasining navbatdagi yig‘ilishida mamlakatda
          koronavirus infeksiyasi bilan kasallanish holatlari ortib borayotgani,
          ushbu kasallikka qarshi zarur choralar ko‘rishni davom ettirish
          lozimligi qayd etildi.
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default Featured;
