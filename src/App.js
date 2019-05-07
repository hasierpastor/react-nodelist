import React, { Component, Suspense } from 'react';
import './App.css';
import { generateNodes } from './Utils/generateNodes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
const LazyTreeTable = React.lazy(() => import('./TreeTable'));
library.add(faTree);

const nNodes = 100;
const seed = 2357;

//generate node object
const nodes = generateNodes(nNodes, seed);

//App component renders table component and header
//User React.lazy and suspense to lazily load nodes
class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <LazyTreeTable nodes={nodes} />
        </Suspense>
      </div>
    );
  }
}

export default App;
