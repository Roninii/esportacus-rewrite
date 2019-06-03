import React from 'react';
import styled from '@emotion/styled';

import bgPattern from '../assets/bg-pattern.png';

const About = styled.div`
  height: 100vh;
  background: url(${bgPattern});
`;

const Info = () => {
  return (
    <About>
      <div>The most popular competitive games</div>
      <div>Find Teams from all regions</div>
      <div>Track your favorite players</div>
      <div>Results from all matches</div>
      <div>Find the leagues you care about</div>
    </About>
  );
};

export default Info;
