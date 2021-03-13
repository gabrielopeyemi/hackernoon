import styled from 'styled-components'
import { primaryColor } from './../../config';

export const Nav = styled.nav`
  display: flex;
`;
export const NavLeft = styled.div`
  margin: 20px auto 20px 20px;
`;

export const NavRight = styled.div`
  display: flex;
`;
export const NavLink = styled.div`
  margin: 10px;
  justify-content: center;
display: flex;
align-items: center;
`;
export const InputStyle = styled.div`
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  text-align: 'center';
  width: 250px;
  outline-color: rgb(0, 255, 0);
  background-color: ${primaryColor};
  background: rgb(0, 59, 0) none repeat scroll 0% 0%;
  border: medium none;
  padding: 10px 20px 10px 10px;
  border-radius: 2px;
  font-size: 1rem;
  transition: all 120ms ease-in-out 0s;
  outline-color: rgb(0, 187, 0);
  color: rgb(0, 255, 0);
  &::placeholder {
    font-weight: 900;
    color: red;
  }
`;
export const InputBoxStyle = styled.input`
  width: 100%;
  background: rgb(0, 59, 0);
  border: 0;
  color: ${primaryColor};
  outline: none;
  outline-color: rgb(0, 255, 0);
`;
// 30px

export interface TypeArgs{
  Outline?: boolean;
}
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
    background-color: rgb(98, 255, 134);
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
export interface  dataArgs {
  color ?: string;
}
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