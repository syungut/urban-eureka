import React, { useState } from 'react';
import { actor } from '../../../declarations/myapp_backend';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = async () => {
    const result = await actor.greet(name);
    setGreeting(result);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
};

export default App;
