import React from 'react';

function CharacterList({characters}){
    return(<>
        
        <p>{characters.map(character => character.name).join('\n')}</p>
        
    </>)
}

export default CharacterList;