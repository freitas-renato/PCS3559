import '@google/model-viewer';

function App() {
  const object_source = 'https://raw.githubusercontent.com/freitas-renato/test123/main/eiffel/Eiffel_tower_sample.gltf';

  return (
    <div className="App">
      <model-viewer 
        alt="Eiffel tower 3D"
        src={object_source}
        ios-src=''
        ar 
        modes="webxr scene-viewer quick-look" 
        camera-controls
        auto-rotate
        style={{width: "100vw", height: "90vh"}}>
      </model-viewer>
    </div>
  );
}

export default App;
