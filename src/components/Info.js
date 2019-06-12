import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { Chart } from 'react-charts'

import { esportacus } from '../utils/api'
import regions from '../assets/regions.jpg'
import leagues from '../assets/leagues.jpg'
import Card from './Card'
import GridView from './GridView'

const About = styled.section`
  height: 100vh;
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const AboutHeader = styled.header`
  width: 100%;
  font-size: 1.2rem;
`

export default class Info extends React.Component {
  state = {
    games: [],
  }

  async componentDidMount() {
    const games = esportacus.games()
    this.setState({ games })
  }

  render() {
    const { games } = this.state

    return (
      <About>
        <AboutHeader>
          <h2
            css={css`
              text-transform: uppercase;
            `}
          >
            The most popular competitive games
          </h2>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              margin-bottom: 2rem;
            `}
          >
            {games.map((game) => {
              return (
                game.image && (
                  <Card
                    key={game.name}
                    width='150px'
                    height='150px'
                    margin='1rem'
                    borderRadius='50%'
                    background={`url(${game.image}) center/cover`}
                  />
                )
              )
            })}
          </div>
        </AboutHeader>
        <GridView>
          <div
            css={css`
              width: 100%;
            `}
          >
            <h3
              css={css`
                text-transform: uppercase;
              `}
            >
              Find teams from all regions
            </h3>
            <Card
              background={`
                linear-gradient(hsla(0, 0%, 7.06%, 45%), hsla(0, 0%, 7.06%, 45%)),url(${regions}) center/contain`}
            />
          </div>
          <div
            css={css`
              width: 100%;
            `}
          >
            <h3
              css={css`
                text-transform: uppercase;
              `}
            >
              Track team and player trends
            </h3>
            <Card padding='1rem 2rem'>
              <Chart
                css={css`
                  max-width: 100%;
                `}
                dark
                data={[
                  {
                    label: 'Series 1',
                    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]],
                  },
                  {
                    label: 'Series 2',
                    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]],
                  },
                ]}
                series={{ type: 'line' }}
                axes={[
                  { primary: true, type: 'linear', position: 'bottom' },
                  { type: 'linear', position: 'left' },
                ]}
              />
            </Card>
          </div>
          <div
            css={css`
              width: 100%;
            `}
          >
            <h3
              css={css`
                text-transform: uppercase;
              `}
            >
              The leagues your care about
            </h3>
            <Card background={`url(${leagues}) center/cover`} />
          </div>
        </GridView>
      </About>
    )
  }
}
