import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid'
function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
