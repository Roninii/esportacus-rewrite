/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const GridView = ({ children }) => {
  return (
    <section
      css={css`
        max-width: 85vw;
        margin: 3rem auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem 1rem;
        place-items: center center;
      `}
    >
      {children}
    </section>
  );
};

export default GridView;
