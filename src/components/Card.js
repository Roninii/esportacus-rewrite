/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Card = ({ children }) => {
  return (
    <article
      css={css`
        width: 100%;
        min-height: 300px;
        border-radius: 5px;
        background: var(--black-light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 5px var(--black-darkest);
      `}>
      {children}
    </article>
  );
};

export default Card;
