import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React from "react";
import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
  return (
    <Section ref={ref} id="faq">
      <Title>faq</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion title="WHAT ARE THE BOWIES?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="WHAT IS A WALLET?">
            A wallet is the digital storage where all your NFTs are saved for
            you in one place to access them.
          </Accordion>
          <Accordion title="WHAT CAN I DO WITH MY NFT AFTER PURCHASE?">
            You can share it, gift it or place it for sale directly from the
            wallet on to the markteplace. There you can see what your NFT is
            worth at the moment.
          </Accordion>
          <Accordion title="CAN I GET MORE DETAILED INFORMATION?">
            YES! With the following link you can get a more detailed overview
            and more answers to your questions. OR you can send us your question
            on ASK US ANYTHING.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
