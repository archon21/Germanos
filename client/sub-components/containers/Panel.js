import React from 'react';

const Panel = props => {
  const {
    background,
    maxWidth,
    column,
    padding,
    style,
    minHeight,
    space,
    pad
  } = props;
  return (
    <div
      style={style}
      className={`
       minw-325px flex wrap align-center maxw-100vw
       ${background && background}
       ${column ? 'column' : 'row'}
       ${pad ? 'w-90' : 'w-100'}
       ${space ? 'justify-space-evenly' : 'justify-center'}
       ${minHeight ? minHeight : 'minh-300px'}`}
    >
      {props.children}
    </div>
  );
};

export default Panel;
