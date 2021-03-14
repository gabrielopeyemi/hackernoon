import React from 'react';
import styled from 'styled-components';

export const Bottom = () => {
  return (
    <Body>
      <Button>
        Join Hacker Noon 
        <i className="fad fa-glasses" ></i>
      </Button>
      <p>Create your free account to unlock your custom reading experience.</p>
    </Body>
  )
}
const Button = styled.button`
  color: rgb(0, 255, 0);
  background-color: rgb(33, 36, 40);
  padding: 0.25em 0.5em;
  margin-bottom: 10px;
  border: 4px solid rgb(0, 255, 0);
  display: inline-block;
  font-weight: bold;
  font-family: "IBM Plex Mono", monospace;
  font-size: 2rem;
  &:hover{
    font-size: 3rem
  }
`;
const Body = styled.div`
  text-align: center;
  font-family: "IBM Plex Mono", monospace;
  margin-top: 25px;
`;
