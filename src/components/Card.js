/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Card = ({
  children,
  width,
  height,
  margin,
  background,
  borderRadius
}) => {
  return (
    <article
      css={css`
        width: ${width};
        height: ${height};
        margin: ${margin};
        border-radius: ${borderRadius};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 5px var(--black-darkest);
        background: url(${background}) center/cover no-repeat;
      `}
    >
      {children}
    </article>
  );
};

Card.defaultProps = {
  width: '100%',
  height: '300px',
  background: 'var(--black-light)',
  margin: '1rem',
  background: '',
  borderRadius: '3px'
};

export default Card;
