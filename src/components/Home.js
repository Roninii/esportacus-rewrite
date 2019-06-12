import React from 'react'
import styled from '@emotion/styled'
import Typed from 'typed.js'

import heroBg from '../assets/bg.jpg'
import logo from '../assets/helmet.svg'
import Info from './Info'

const Hero = styled.div`
  height: 90vh;
  background: linear-gradient(
      to right,
      hsla(0, 0%, 7.06%, 85%),
      hsla(0, 0%, 7.06%, 85%)
    ),
    url(${heroBg}) center center fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  }
`

const HeroLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 3rem 0;

  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    height: 5px;
    width: 75%;
    border-bottom: 1px solid var(--primary);
  }

  @media screen and (min-width: 400px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 600px) {
    letter-spacing: 0.5rem;
    font-size: 4rem;
  }
`

const HeroIntro = styled.p`
  font-size: 2rem;
  font-weight: 400;
`

export default class Home extends React.Component {
  componentDidMount() {
    // options for typed.js
    const options = {
      strings: ['teams', 'players', 'leagues'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 2000,
    }
    // this.el refers to the <span> in the render() method, used for Typed package
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <main>
        <Hero>
          <header>
            <div>
              <HeroLogo style={{ position: 'relative' }}>
                <img src={logo} alt='logo' />
                ESPORTACUS
              </HeroLogo>
            </div>
            <HeroIntro>
              Track your favorite&nbsp;
              <span
                style={{ whiteSpace: 'pre', color: 'var(--primary)' }}
                ref={(el) => {
                  this.el = el
                }}
              />
            </HeroIntro>
          </header>
        </Hero>
        <Info />
      </main>
    )
  }
}
