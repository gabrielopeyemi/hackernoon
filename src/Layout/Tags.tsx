import React from 'react'
import { Heading } from '../components/Heading'
import styled from 'styled-components';

export const Tags = (props: any) => {
  const { tags } = props.data;
  return (
    <Body>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Heading>Tags</Heading>
          <Tag>
            {props.data.map((tag: string, i: number) => (
              <Link key={i}>
                {tag}
              </Link>
            ))}
          </Tag>
        </div>
        <div className="col-2"></div>
      </div>
    </Body>
  )
}

const Body = styled.div`
`;
const Tag = styled.div`
  margin-top: 20px;
  display: flex;
-moz-box-pack: center;
justify-content: center;
flex-wrap: wrap;
`;
const Link = styled.span`
    color: rgb(60, 60, 59);
    box-shadow: none;
    transition: all 120ms ease-in-out 0s;
    font-weight: bold;
    font-family: "IBM Plex Mono", monospace;
    text-decoration: none;
    align-items: center;
    display: inline-flexbox;
    justify-content: center;
    line-height: 1em;
    box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;
    padding: 10px;
    font-size: .9rem;
    margin: 0px 10px 10px 0px;
    cursor: pointer;
    outline: currentcolor none medium;
    &:hover{
      background: rgb(0, 255, 0) none repeat scroll 0% 0%;
      color: rgb(60, 60, 59);
      box-shadow: rgb(0, 187, 0) 0px 0.2em, rgb(0, 187, 0) 0px -0.2em, rgb(0, 187, 0) 0.2em 0px, rgb(0, 187, 0) -0.2em 0px;
      transition: all 120ms ease-in-out 0s;
    }
`;