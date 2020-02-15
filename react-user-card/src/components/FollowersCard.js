import React from 'react';
import styled from 'styled-components';


const CardWrap = styled.div`
margin: 5%;

` 
const Card = styled.div`
border: 1px solid grey;
border-radius: 15px;
width: 30%;
margin: auto;
padding-top: 2%
padding-bottom: 7%;
box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;

&:hover {
    box-shadow: 0 10px 16px 0 rgba(78, 142, 166);
  }
`

const CardContent = styled.div`
margin: 5%;
padding: 2px 16px;
`


const Image = styled.img`
width: 100%;
border-radius: 15px;
`





const FollowersCard = ({git,  img}) => {
    return(
        <CardWrap>
        <Card>
        <CardContent>
            <Image src={img}/>
            <br></br>
            <strong> GitHub Handle: {git}</strong>
        </CardContent>
        </Card>
        </CardWrap>
    );
};

export default FollowersCard;