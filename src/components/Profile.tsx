import React from 'react'
import styled from 'styled-components'
import { Alink, AvatarLink, AvaterImg } from '../assets/Styles'
import { MainFont } from '../config';

export const Profile = (props?: any) => {
  
  const { avatar, displayName } = props.data;
  return (
    <div>
      <AvatarLink>
        <AvaterImg src={avatar} alt={props.data}/>
      </AvatarLink>
      <h3>
        <Alink color={props.color} href='/'>@{displayName}</Alink>
        <Small>{displayName}</Small>
      </h3>
    </div>
  )
}

const Small = styled.small`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: ${MainFont};
`