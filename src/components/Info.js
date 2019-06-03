import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import Card from './Card';
import { esportacus } from '../utils/api';

const About = styled.section`
  height: 100vh;
  width: 90vw;
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const AboutHeader = styled.header`
  width: 100%;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export default class Info extends React.Component {
  state = {
    games: []
  };

  async componentDidMount() {
    const games = esportacus.games();
    this.setState({ games });
  }

  render() {
    const { games } = this.state;

    return (
      <About>
        <AboutHeader>
          <h2>The most popular competitive games</h2>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              margin-bottom: 2rem;
            `}
          >
            {games.map((game) => (
              <Card
                width="300px"
                height="300px"
                margin="1rem 0"
                borderRadius="50%"
                background={game.image}
              />
            ))}
          </div>
        </AboutHeader>
      </About>
    );
  }
}
