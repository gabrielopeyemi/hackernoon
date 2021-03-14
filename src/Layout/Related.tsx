/* eslint-disable array-callback-return */
import React from 'react'
import styled from 'styled-components';
import { Card } from '../components/Card';
import { Heading } from '../components/Heading';

export const Related = (props?: any) => {
  return (
    <div
      style={{
      marginTop: '40px'
    }}>
      <Heading>Related</Heading>
      <Body>
        <div className="row">
          {props.data.slice(1).map((relatedStorie: any, i: number): any => 
            // console.log(relatedStorie);
            (
              <div className="col-sm-12 col-md-6 col-lg-4" key={i}
              style={{display: relatedStorie.id ? 'block' : 'none'}}
              >
                  <Card data={relatedStorie} />
                </div> 
              )
          )}
        </div>
      </Body>
    </div>
  )
}


const Body = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`