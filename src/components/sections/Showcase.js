import React from "react";
import styled, { keyframes } from "styled-components";
import { useRef } from "react";

import img1 from "../../assets/Nfts/1.png";
import img2 from "../../assets/Nfts/2.png";
import img3 from "../../assets/Nfts/3.png";
import img4 from "../../assets/Nfts/4.png";
import img5 from "../../assets/Nfts/5.png";
import img6 from "../../assets/Nfts/6.png";
import img7 from "../../assets/Nfts/7.png";
import img8 from "../../assets/Nfts/8.png";
import img9 from "../../assets/Nfts/9.png";
import img10 from "../../assets/Nfts/10.png";
import img11 from "../../assets/Nfts/11.png";
import img12 from "../../assets/Nfts/12.png";
import img13 from "../../assets/Nfts/13.png";
import img14 from "../../assets/Nfts/14.png";

import ETH from "../../assets/Ethereum.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 25s;

    @media (max-width: 30em) {
      animation-duration: 30s;
    }
  }
  & > *:last-child {
    animation-duration: 20s;
    @media (max-width: 30em) {
      animation-duration: 30s;
    }
  }
`;

const move = keyframes`
  0% { transform: translateX(100%)}
  100% { transform: translateX(-100%)}
`;

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-size: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ title, img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="Bowies Club" />
      <Details>
        <div>
          <span>{title}</span> <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>
            <span>Price</span>
            <Price>
              <img src={ETH} alt="ETH" />
              <h1>{Number(price).toFixed(1)}</h1>
            </Price>
          </span>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem
          img={img1}
          title={"Bowie 1"}
          number={1}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img2}
          title={"Bowie 2"}
          number={2}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img3}
          title={"Bowie 3"}
          number={3}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img4}
          title={"Bowie 4"}
          number={4}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img5}
          title={"Bowie 5"}
          number={5}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img6}
          title={"Bowie 6"}
          number={5}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img7}
          title={"Bowie 7"}
          number={5}
          price={0.5}
          passRef={Row1Ref}
        />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem
          img={img8}
          title={"Bowie 8"}
          number={5}
          price={0.5}
          passRef={Row2Ref}
        />
        <NftItem
          img={img9}
          title={"Bowie 9"}
          number={6}
          price={0.5}
          passRef={Row2Ref}
        />
        <NftItem
          img={img10}
          title={"Bowie 10"}
          number={7}
          price={0.5}
          passRef={Row2Ref}
        />
        {/* <NftItem img={img11} number={8} price={0.5} passRef={Row2Ref} /> */}
        <NftItem
          img={img12}
          title={"Bowie 12"}
          number={9}
          price={0.5}
          passRef={Row2Ref}
        />
        <NftItem
          img={img13}
          title={"Bowie 13"}
          number={5}
          price={0.5}
          passRef={Row1Ref}
        />
        <NftItem
          img={img14}
          title={"Bowie 14"}
          number={5}
          price={0.5}
          passRef={Row1Ref}
        />
      </Row>
    </Section>
  );
};

export default Showcase;
