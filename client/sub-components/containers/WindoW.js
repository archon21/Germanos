import React from 'react';

const WindoW = props => {
  const {
    backgroundUrl,
    background,
    maxWidth,
    column,
    padding,
    video,
    align,
    space,
    relative
  } = props;
  return (
    <div
      style={{ overflowX: 'hidden', backgroundImage: `url(${backgroundUrl})` }}
      className={`
      ${background && background}
      ${padding && padding}
      ${backgroundUrl && 'background-cover'} flex ${column ? 'column' : 'row'}
      ${align ? align : 'align-center'}
      ${video && 'maxw-100vw maxh-100vh'}
      ${maxWidth && maxWidth}
      ${relative && 'relative'}
    ${
      space ? 'justify-space-evenly' : 'justify-center'
    } w-100 minh-90vh  wrap `}
    >
      {props.children}
    </div>
  );
};

export default WindoW;
