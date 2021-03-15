import React from 'react'
import styled from 'styled-components';

export default function Title(props: any) {
  return (
    <TitleDiv>{props.data}</TitleDiv>
  )
}
const TitleDiv = styled.h1`
    grid-column: 1 / -1;
    text-align: center;
    font-size: 2.5em;
    letter-spacing: 0px;
    font-family: "IBM Plex Mono", monospace;
    line-height: 1.4;
    margin: 0.67em 0px;
    margin: 0px;
    padding-top: 30px;
    font-weight: 800;
`;