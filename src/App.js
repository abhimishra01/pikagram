import React,{useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid'
import Modal from './comps/modal';
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid selectedImg={setSelectedImg} />
      <Modal selectedImg={selectedImg}/>
    </div>
  );
}

export default App;
