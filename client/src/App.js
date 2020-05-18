import React from 'react';
import Repository from './features/repositories/Repository'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  document.title = 'GithubFilter'
  return (
    <Repository />
  );
}

export default App;
