import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import ModelViewer from './components/ModelViewer';
import Dropzone from './components/DragAndDrop';

function App() {
  // const object_source = 'https://raw.githubusercontent.com/freitas-renato/test123/main/eiffel/Eiffel_tower_sample.gltf';
  const object_source = 'https://raw.githubusercontent.com/freitas-renato/test123/main/squirtle/squirtle.gltf';

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Dropzone />} />
          <Route path="/object" element={<ModelViewer objectSource={object_source}/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
