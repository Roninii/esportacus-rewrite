/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Card = ({
  children,
  width,
  height,
  margin,
  padding,
  background,
  borderRadius,
  boxShadow,
}) => {
  return (
    <article
      css={css`
        position: relative;
        width: ${width};
        margin: ${margin};
        padding: ${padding};
        height: ${height};
        border-radius: ${borderRadius};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: ${boxShadow};
        background: ${background};

        @media screen and (max-width: 500px) {
          margin: 0;
          padding: 0;
        }
      `}
    >
      {children}
    </article>
  )
}

Card.defaultProps = {
  width: '100%',
  height: '300px',
  background: 'var(--black-light)',
  margin: '1rem',
  padding: '0',
  borderRadius: '3px',
  boxShadow: '0 5px 5px var(--black-darkest)',
}

export default Card
