/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const GridView = ({ children }) => {
  return (
    <section
      css={css`
        width: 100%;
        margin: 3rem auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem 1rem;
        place-items: center center;

        @media screen and (min-width: 600px) {
          max-width: 85vw;
        }
      `}
    >
      {children}
    </section>
  )
}

export default GridView
