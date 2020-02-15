import React from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
margin: 5%;

` 
const Card = styled.div`
border: 1px solid grey;
border-radius: 15px;
width: 60%;
margin: auto;
padding-top: 2%
padding-bottom: 7%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
width: 70%;
border-radius: 15px;
`



const UserCard = ({ user, img, bio, location}) => {
    return(
    <CardWrap>
        <Card>
            <CardContent>
            <Image src={img}/>
            <br></br>
            <strong>Name: {user}</strong>
            <p>Bio: {bio}</p>
            <p>Location: {location}</p>
            </CardContent>
        </Card>
    </CardWrap>
    );
};

export default UserCard;