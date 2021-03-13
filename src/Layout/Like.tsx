import React, {useState} from 'react'
import styled from 'styled-components'
import { heartLightArgs } from './MainOne';
import Heart from './../images/icons/heart.png';
import Money from './../images/icons/money.png';
import Boat from './../images/icons/boat.png';
import Light from './../images/icons/light.png';
import { handleHeart } from '../assets/function';

export const Like = () => {
  const [like, setLike] = useState<number>(10);
  const [heartLight, setHeartLight] = useState<boolean>(false);
  const [lightLight, setLightLight] = useState<boolean>(false);
  const [boatLight, setBoatLight] = useState<boolean>(false);
  const [moneyLight, setMoneyLight] = useState<boolean>(false);

  return (
    <div style={{display: 'flex'}}>
      <label style={{
            marginLeft: 10,
            marginRight: 10
          }}>{like}</label> 
            <div>
              <IconImgHeart Light={heartLight} onClick={()=> handleHeart(like, setHeartLight, heartLight, setLike)} src={Heart} alt='heart'/>
              <IconImgLight Light={lightLight} src={Light} onClick={()=> handleHeart(like, setLightLight, lightLight, setLike)} alt='light'/>
              <IconImgBoat Light={boatLight} src={Boat} onClick={()=> handleHeart(like, setBoatLight, boatLight, setLike)} alt='boat'/>
              <IconImgMoney Light={moneyLight} src={Money} onClick={()=> handleHeart(like, setMoneyLight, moneyLight, setLike)} alt='money'/> 
            </div>
    </div>
  )
}

const IconImgHeart = styled.img<(heartLightArgs) >`
margin-left: 5px;
filter: grayscale(${(p: any) => p.Light ? 1 : 0});
margin-right: 5px;
height: 30px;
transform: scale(1.2);
  &:hover{
    filter: grayscale(0)
  }
`;
const IconImgMoney = styled.img<(heartLightArgs)>`
  margin-left: 5px;
  filter: grayscale(${(p: any) => p.Light ? 1 : 0});
  margin-right: 5px;
  height: 30px;
  transform: scale(1.2);
  &:hover{
    filter: grayscale(0)
  }
`;

const IconImgLight = styled.img<(heartLightArgs) >`
margin-left: 5px;
filter: grayscale(${(p: any) => p.Light ? 1 : 0});
margin-right: 5px;
height: 30px;
transform: scale(1.2);
&:hover{
  filter: grayscale(0)
}
`;
const IconImgBoat = styled.img<(heartLightArgs) >`
margin-left: 5px;
filter: grayscale(${(p: any) => p.Light ? 1 : 0});
margin-right: 5px;
height: 30px;
transform: scale(1.2);
&:hover{
  filter: grayscale(0)
}
`;