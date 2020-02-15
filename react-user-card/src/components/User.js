import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class User extends React.Component {

    state = {
        name: []
    }

    componentDidMount () {
        
        axios 
        .get(`https://api.github.com/users/JulisaDiego`)
        .then (res => {
            this.setState({
                name: res.data.name,
                img: res.data.avatar_url,
                bio: res.data.bio,
                location: res.data.location
            });
        });
        
    
    }

    render() {
        return(
            <div>
                <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio} location={this.state.location} />
            </div>
        );
    }
}

export default User;