import React from 'react';
import styled from '@emotion/styled';

const HeroSection = styled.div`
  background-color: #006400;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
`;

function Home() {
  return (
    <HeroSection>
      <HeroTitle>
        Welcome to Sreko <br />
        Wholesale Flowers and Plants
      </HeroTitle>
      {/* Add content for the hero section */}
    </HeroSection>
  );
}

export default Home;
