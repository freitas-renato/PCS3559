import React from 'react';

import Header from './components/Header';
import ModelViewer from './components/ModelViewer';

function App() {
  const object_source = 'https://raw.githubusercontent.com/freitas-renato/test123/main/eiffel/Eiffel_tower_sample.gltf';

  return (
    <div className="App">
      <Header />

      <ModelViewer objectSource={object_source} />

    </div>
  );
}

export default App;
