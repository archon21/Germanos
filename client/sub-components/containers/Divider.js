import React from 'react';

const Divider = props => {
  const {
    color,
    border,
    backgroundColor,
    children,
    type,
    direction,
    text
  } = props;
  return (
    <div
      className={`

      ${backgroundColor && backgroundColor}
      ${direction ? direction : 'column'}
      ${border && 'block__border-top block__border-bottom'}
        divider flex column align-center justify-center  py-20px
        minw-100vw minh-10vh text-center`}
    >
      {children ? (
        children
      ) : (
        <span
          className={`
                  py-10px
          ${type ? type : 'headline-3'}
                    ${color ? color : 'color-tirciary'}

      `}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Divider;
