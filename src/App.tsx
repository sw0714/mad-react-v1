import React from 'react';
import {Web3ReactProvider} from '@web3-react/core'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers'
import './App.css';

const getLibrary = (provider: ExternalProvider) => {
  return new Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <div className="App">
          <header className="App-header">
            Welcome to Mad NFT
          </header>
        </div>
      </Web3ReactProvider>
  );
}

export default App;
