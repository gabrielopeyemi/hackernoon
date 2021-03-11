import React from 'react';
import {
  Container
} from 'reactstrap'
import { Card } from '../components/Card';

export const HeroOne = () => {
  return (
    <>
      <div>
        <div className='row'>
          <div className='col-md-6' style={{padding: '2px'}} >
            <Card />
          </div>
          <div className='col-md-6'  style={{padding: '2px'}}>
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}