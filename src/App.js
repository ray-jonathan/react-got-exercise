import React from 'react';
import './App.css';
import CharacterList from './CharacterList';
import characters from './characters';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <CharacterList characters={characters}/>
        </header>
      </div>
    );
  }
}

export default App;
