import React from 'react';
import './App.css';
import CharacterList from './CharacterList';
import charactersObjects from './characters';
import CharacterDetail from './CharacterDetail';
import SearchBar from './SearchBar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters : charactersObjects,
      chosenCharacter: null
    };
  }

  render() {


    return (
      <div className="App">
        <div className="top-bar"> <h1>GAME OF THRONES</h1> </div>
        {/* <header className="App-header"> */}
          <div className="box"></div>
          <SearchBar searchingName={this._filterList} />
          <div className="character-box" >
          <CharacterList characters={this.state.characters} clickHandler={this._choseCharacter}/>
          {this.state.chosenCharacter? <CharacterDetail  characterDetails={this.state.chosenCharacter} /> : <div className="character-detail"></div>}
          </div>
        {/* </header> */}
      </div>
    );
  }
  _choseCharacter = (chosenCharacter) => {
    this.setState({
      chosenCharacter 
    })
  }
  _filterList = (userInput) => {
    const filteredChars = charactersObjects.filter(character => (character.name.toLowerCase()).includes(userInput.toLowerCase()))
    this.setState({
      characters : filteredChars
    })
  }

}

export default App;
