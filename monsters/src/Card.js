import React from 'react';

const Card = ( { id, username, email} ) => {
    return (
        <div className='bg-light-gray dib br3 pa2 ma2 grow'>
            <img alt='monster' src={`https://robohash.org/${id}?set=set2`} />
            <div>
                <h2>{ username }</h2>
                <h5>{ email }</h5>
            </div>
        </div>
    );
}

export default Card;