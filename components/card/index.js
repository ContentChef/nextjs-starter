import React from 'react';

const CardWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  padding: 20,
  boxShadow: '0 0 6px 6px #00000020',
  marginBottom: 40,
  color: 'initial'
};

const CardImageWrapper = {
  display: 'flex',
  justifyContnet: 'center',
  alignItems: 'center'
};

const ImageWrapper = {
  height: 150,
  maxHeight: 150,
};

const CardContentWrapper = {
  paddingLeft: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const ContentTitle = {
  fontSize: 20,
  fontWeight: 'bold',
};

export const Card = (props) => {
  return (<div style={CardWrapperStyle}>
    <div style={CardImageWrapper}>
      <img
        style={ImageWrapper}
        src={props.image}
        alt={`${props.title} image`}
      />
    </div>
    <div style={CardContentWrapper}>
      <div style={ContentTitle}>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.url}</div>
    </div>
  </div>)
};
