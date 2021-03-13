import React from 'react'
import styled from 'styled-components'
import { Like } from './Like'

export default function HeroTwo() {
  return (
    <Div>
      <Like />
    </Div>
  )
}

const Div = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`