import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SliderItems } from "../../data/SliderData";
import star3 from "../../Assets/star3.png";
import g from "../../Assets/g.png";
import { mobile } from "../responcive";

//Cards
const Cards = styled.div`
  padding: 1rem calc((95vw - 1200px) / 2);
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -37}vw);
  ${mobile({ display: "none" })}
`;

const ContainerCard = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.7rem; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridCard = styled.div`
  width: 410px;
  height: 410px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin-right: 15px;
`;

const CardWrapper = styled.div`
  display: flex;
`;

const GoogleImg = styled.img`
  width: 60px;
  height: 60px;
  background-size: cover;
`;

const GoogleTitle = styled.span`
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  text-decoration: underline;
`;

const TitleContainer = styled.div``;

const RatingImg = styled.img`
  width: 100px;
  height: 20px;
  margin-left: 15px;
  margin-top: 10px;
`;

const CardDate = styled.span`
  color: gray;
  margin-left: 5px;
  padding: 4px;
`;

const CardPara = styled.span`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const GImg = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;

const GSpan = styled.span`
  font-size: 20px;
  font-weight: 300;
  color: blue;
`;

const GWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerSlider = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const MainSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 20);
    } else {
      setSlideIndex(slideIndex < 20 ? slideIndex + 1 : 0);
    }
  };

  return (
    <ContainerSlider>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Cards slideIndex={slideIndex}>
        <ContainerCard>
          {SliderItems.map((item) => (
            <GridCard>
              <CardWrapper>
                <GoogleImg src={item.img} />
                <TitleContainer>
                  <GoogleTitle>{item.title}</GoogleTitle>
                  <RatingImg src={star3} />
                  <CardDate>{item.date}</CardDate>
                </TitleContainer>
              </CardWrapper>
              <GWrapper>
                <CardPara>{item.rating}</CardPara>
                <GImg src={g} /> Posted On
                <GSpan>Google</GSpan>
              </GWrapper>
            </GridCard>
          ))}
        </ContainerCard>
      </Cards>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </ContainerSlider>
  );
};

export default MainSlider;