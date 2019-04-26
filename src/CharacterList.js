import React from 'react';

function CharacterList({characters, clickHandler}){
    return(<div className="character-list" >
        {/* <ul> */}

        {characters.map((character, i) => <button onClick={() => clickHandler(character)} >{character.name}</button>)}

        {/* </ul> */}
        
    </div>)
}

export default CharacterList;