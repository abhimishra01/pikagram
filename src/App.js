import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid'
import Modal from './comps/modal';
function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid selectedImg={setSelectedImg} />
      <Modal/>
    </div>
  );
}

export default App;
