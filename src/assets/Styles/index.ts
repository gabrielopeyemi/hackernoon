import styled from 'styled-components'
import { primaryColor } from './../../config';


export interface  dataArgs {
  color ?: string;
}

export interface TypeArgs{
  Outline?: boolean;
  navStatus?: boolean;
}

export const Nav = styled.nav<TypeArgs>`
  display: ${(p : any) => p.navStatus ? 'none' : 'flex'};
  

`;
export const NavLeft = styled.div`
  margin: 20px auto 20px 20px;
`;

export const NavRight = styled.div`
  display: flex;
`;
export const NavLink = styled.div`
  margin: 5px;
  justify-content: center;
display: flex;
align-items: center;
`;

export const ButtonStyle = styled.button<TypeArgs>`
  color: #fff;
  background-color: ${primaryColor};
  font-family: "IBM Plex Mono", monospace;
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  position: relative;
  outline: currentcolor none medium;
  line-height: 1.3;
  border: ${(p: any) => p.Outline ?  `2px solid rgb(33, 36, 40)` : `0px solid rgb(33, 36, 40)`};
  border-radius: 2px;
  font-size: .9rem;
  font-weight: bold;
  &:hover{
    background-color: ${primaryColor};
  }
`;

export const Icon = styled.i`
    transform: translate(-50%, -50%);
    opacity: 0.7;
    margin-right: 10px;
`;
export const IconButton = styled.button`
  font-size: 2.4rem;
  color: rgb(0, 59, 0);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none;
  overflow: hidden;
  cursor: pointer;
  margin-right: 10px;
  padding-right: 10px;
`
export const AvaterImg = styled.img`
  max-width: 50px;
  object-fit: cover;
  box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;
  border-style: none;
`;
export const AvatarLink = styled.a`
color: rgb(0, 255, 0);
background-image: none;
`;

export const Alink = styled.a<dataArgs>`
  padding: 2px 0px 1px;
  background-image: linear-gradient(transparent 0%, transparent calc(50% - 9px), rgba(0, 255, 0, 0.35) calc(50% - 9px), rgba(0, 255, 0, 0.35) 100%);
  transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;
  background-size: 100% 200%;
  background-position: 0px 0px;
  word-break: break-word;
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0px;
  color: ${(p: any) => p.color ? primaryColor : 'rgb(60, 60, 59)'};
  font-family: "IBM Plex Mono", monospace;
  line-height: 1.4;
  &:hover{
    background-image: linear-gradient(transparent 0%, transparent calc(50% - 9px), rgb(0, 255, 0) calc(50% - 9px), rgb(0, 255, 0) 100%);
    background-position: 0px 100%;
    text-decoration: none;
    color: rgb(60, 60, 59);
  };
`;
export const IconDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Ax = styled.a`
  margin-left: 0px !important;
  margin-right: 10px;
`;
export const Imgx = styled.img`
  max-width: 20px;
  color: rgb(60, 60, 59);
  max-width: 20px;
`;