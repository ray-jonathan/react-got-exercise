import React from 'react';
function CharacterDetail({characterDetails}){
    console.log(characterDetails);
    return(<div className="character-detail">
        <h2>Name: {characterDetails.name}</h2>
        {characterDetails.aliases > 0? <h2>Aliases: {characterDetails.aliases.map(alias => alias).join(', ')}</h2> : null}
        {characterDetails.titles ? <h3>Titles: {characterDetails.titles.map(title => title).join(', ')}</h3> : null}
        {characterDetails.born ? <h3>Born: {characterDetails.born}</h3> : null}
    </div>)
}
export default CharacterDetail;