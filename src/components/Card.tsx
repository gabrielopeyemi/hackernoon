import React from 'react'
import styled from 'styled-components';
import { MainFont } from '../config';
import { primaryColor } from './../config';
import { darkColor, lightColor } from '../assets/dist/color';

export const Card = (props?: any) => {
  const {
    companyName,
    title,
    mainImage,
    profile,
    createdAt
  } = props.data
  console.log({ data: props.data.profile });
  console.log('hello')
  return (
    <Body>
      <Article className="card text-left" color={props.color}>
        <div>
          <TitleWrapper>
            <>
              <A className="card-title" color={props.color}>{title}</A>
            </>
              <Icon className="fas fa-bookmark"></Icon>
          </TitleWrapper>
          <Img className="card-img-top" src={mainImage} alt={mainImage} />
          <Tag>
            <ALink href='/'>
              Bitcoin
            </ALink>
          </Tag>
        </div>
      </Article>
      <div style={{ backgroundColor: props.color ? darkColor : lightColor }}>
        <div>
          <CardFooter>
            <Footer className='col-8' style={{ marginTop: '10px', marginBottom: 10,}}>
              <FooterLink href='/'>
                <CardFooterImg src='https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2Fwigx3JsTvDOJSxLPmAl3OdM9Xsn2-zg23uzp.jpeg?alt=media&token=20c9de74-97a4-49d4-b457-61d06d9bc04b' alt='icon' />
              </FooterLink>
              <div style={{
                marginLeft: 10,
              }}>
                <h3
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <a href='/' style={{
                    color: 'rgb(0, 255, 0)',
                    backgroundImage: 'none',
                    fontSize: 15,
                    fontFamily: MainFont
                  }}>
                    @{profile.displayName}
                  </a>
                <small style={{
                  fontFamily: MainFont,
                    fontSize: 14,
                    color: props.color ? lightColor : darkColor
                }}>Gabriel</small>
                </h3>
              </div>
            </Footer>
            <FooterRight
              style={{
                display: 'flex',
                justifyContent: 'center',
            }}
              className='col-4'>
              <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 10,
                    marginBottom: 10,
                    float: 'right',
                    color: props.color ? lightColor : darkColor
              }}>
                <small>7min ago</small>
                <small>20 min ago</small>
              </div>
            </FooterRight>
          </CardFooter>
        </div>
      </div>
    </Body>
  )
}

const Img = styled.img`
  height: 200px;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  transition: transform 200ms ease-in-out 0s;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
`;
export interface colorArgs {
  color: string;
}

const Body = styled.div`
  border: 1px solid #fff;
`;

const Article = styled.article<colorArgs>`
  background-color: ${(props: any )=> props.color ? darkColor : lightColor};
  border-radius: 0;
  color: #fff;
`;
const CardFooter = styled.div`
  flex: 1;
  display: flex;
`;
const FooterRight = styled.div`
  margin: 20;
`
const Footer = styled.div`
    align-items: center;
    display: flex;
    align-content: start;
    margin-bottom: 0px;
    place-items: start;
    align-items: start;
    padding-right: 10px;
`;
const CardFooterImg = styled.img`
  max-width: 50px;
  object-fit: cover;
  box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;
  border-style: none;
`
const FooterLink = styled.a`
    color: rgb(0, 255, 0);
    background-image: none;
    `;
const CardReact = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: end;
  justify-content: flex-end;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12.8px;
`;
const TitleWrapper = styled.div`
  display: flex;
  margin: 15px;
`;
const IButton = styled.button`
 opacity: 1 !important;
`

const Icon = styled.i`
  display: block;
  font-weight: 300;
  color: rgb(246, 247, 249);
  margin: 10px;
`;
const Title = styled.a`
  font-family: ${MainFont};
  padding: 20px;
  font-weight: 600;
  background-color: transparent;
  color: rgb(193, 202, 212);
  font-size: 15px;
`;
const Tag = styled.div`
  position: absolute;
  margin: 0px;
  right: 10px;
  bottom: 10px;
  z-index: 1;
`;
const ALink = styled.a`
font-family: "IBM Plex Mono", monospace;
background: rgb(246, 247, 249) none repeat scroll 0% 0%;
color: rgb(60, 60, 59);
font-weight: bold;
text-decoration: none;
display: flex;
-moz-box-align: center;
align-items: center;
width: auto;
line-height: 1em;
box-shadow: rgb(194, 202, 214) 0px 0.2em, rgb(194, 202, 214) 0px -0.2em, rgb(194, 202, 214) 0.2em 0px, rgb(194, 202, 214) -0.2em 0px;
padding: 10px;
font-size: 1.2rem;
margin: 0px 10px 10px 0px;
text-decoration: none;
&:hover{
  background: rgb(0, 255, 0) none repeat scroll 0% 0%;
    color: rgb(60, 60, 59);
    box-shadow: rgb(0, 187, 0) 0px 0.2em, rgb(0, 187, 0) 0px -0.2em, rgb(0, 187, 0) 0.2em 0px, rgb(0, 187, 0) -0.2em 0px;
    transition: all 120ms ease-in-out 0s;
    text-decoration: none;

  }
}
`;
const A = styled.div<colorArgs>`
  padding: 2px 0px 1px;
  /* background-image: linear-gradient(transparent 0%, transparent calc(50% - 9px), rgba(0, 255, 0, 0.35) calc(50% - 9px), rgba(0, 255, 0, 0.35) 100%); */
  transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;
  background-size: 100% 200%;
  background-position: 0px 0px;
  word-break: break-word;
  line-height: 1.4;
  cursor: pointer;
  letter-spacing: 0px;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 900;
  color: ${(p :any) => p.color ? lightColor : darkColor};
  text-decoration: underline;
  text-decoration-color: ${primaryColor};
  &:hover{
    padding: 2px 0px 1px;
    background-color: ${primaryColor};
    transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;
    background-size: 100% 200%;
    background-position: 0px 0px;
    word-break: break-word;
  }
`;