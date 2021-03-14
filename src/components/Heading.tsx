import React from 'react'
import styled from 'styled-components';

export const Heading= ({children}: any) => {
  return (
    <div>
      <Title>
        <Hr/>
        <H4>{children}</H4>
        <Hr/>
      </Title>
    </div>
  )
}
const Title = styled.div`
  display: flex;
`;
const Hr = styled.hr`
  border: 1px solid black;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
`;
const H4 = styled.h4`

  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
  -moz-box-align: center;
  align-items: center;
  text-align: center;
`;