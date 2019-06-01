/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Grid = ({ children }) => {
  return (
    <section
      css={css`
        max-width: 85vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem 1rem;
        place-items: center center;
      `}>
      {children}
    </section>
  );
};

export default Grid;
