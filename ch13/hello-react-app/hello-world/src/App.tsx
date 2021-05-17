import React, {useState} from 'react';
import './App.css';

interface State {
  username: string,
  url: string
}


function App() {
  const [state, setState] = useState<State>(
      {username: 'Pavel', url: 'https://picsum.photos/600/150'}
  )

  return (
    <div className="App">
      <h2>{state.username}</h2>
      <img src={state.url} alt=""/>
    </div>
  );
}

export default App;
