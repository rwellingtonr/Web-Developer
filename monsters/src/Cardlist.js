import React from 'react';
import Card from './Card';

const Cardlist = ( { users } ) => {
    const cardContent = users.map((user, i) => {
        return (<Card 
        key = {i}
        id = {users[i].id}
        username = {users[i].username}
        email = {users[i].email}
        />)
    })
    
    return (
        <div>
            { cardContent }
        </div>
    );
}

export default Cardlist;