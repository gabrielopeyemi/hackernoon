import React from 'react'
import styled from 'styled-components';

export const MainImg = (props: any) => {
  return (
    <>
      <Img src={props.data} alt={props.data}/>
    </>
  )
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;