import React from 'react';
import styled from '@emotion/styled';
import Typed from 'typed.js';

import heroBg from '../assets/bg.jpg';
import bgPattern from '../assets/bg-pattern.png';

const Hero = styled.div`
  height: 90vh;
  background: linear-gradient(
      to right,
      hsla(0, 0%, 7.06%, 80%),
      hsla(0, 0%, 7.06%, 80%)
    ),
    url(${heroBg}) center center fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroIntro = styled.div`
  font-size: 3rem;
  font-weight: 400;
`;

const About = styled.div`
  height: 100vh;
  background: url(${bgPattern});
`;

export default class Home extends React.Component {
  componentDidMount() {
    // options for typed.js
    const options = {
      strings: ['teams', 'players', 'leagues'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 2000
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <main>
        <Hero>
          <header>
            <HeroIntro>
              Track your favorite&nbsp;
              <span
                style={{ whiteSpace: 'pre', color: 'var(--blue)' }}
                ref={(el) => {
                  this.el = el;
                }}
              />
            </HeroIntro>
          </header>
        </Hero>
        <About />
      </main>
    );
  }
}
